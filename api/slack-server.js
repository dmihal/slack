getAccessToken = function(userId) {
  try {
    var user = Meteor.users.findOne(userId);
    return user.services.slack.accessToken;
  } catch(e) {
    return null;
  }
}

Meteor.methods({
  'slack-channels-list': function(args){
    var token = args.token || getAccessToken(this.userId);
    if (!token){
      throw new Error("User is not authenticated with Slack");
    }
    
    var response;
    try {
      response = HTTP.post('https://slack.com/api/channels.list',{
        params: {
          token: token
        }
      });
    } catch (e){
      throw new Error("Request Error");
    }
    if (response.statusCode === 200 && response.data.ok){
      return response.data.channels;
    } else {
      throw new Error("Recieved response code " + response.statusCode);
    }
  },
  'slack-post': function(args){
    var token = args.token || getAccessToken(this.userId);
    if (!token){
      throw new Error("User is not authenticated with Slack");
    }
    
    var response;
    try {
      response = HTTP.post('https://slack.com/api/chat.postMessage',{
        params: {
          token: token,
          channel: args.channel,
          text: args.message,
          username: args.username || "Slackbot"
        }
      });
    } catch (e){
      throw new Error("Request Error");
    }
    return response;
  }
});
