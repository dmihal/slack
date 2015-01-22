var getAccessToken = function() {
  try {
    return Meteor.user().services.slack.accessToken;
  } catch(e) {
    return null;
  }
}

Meteor.methods({
  'slack-channels-list': function(){
    var token = getAccessToken();
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
    var token = getAccessToken();
    if (!token){
      throw new Error("User is not authenticated with Slack");
    }
    
    var response;
    try {
      response = HTTP.post('https://slack.com/api/chat.postMessage',{
        params: {
          token: token,
          channel: args.channel,
          text: "Api test",
          username: "My Bot"
        }
      });
    } catch (e){
      throw new Error("Request Error");
    }
    return response;
  }
});
