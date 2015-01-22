var getAccessToken = function() {
  try {
    return Meteor.user().services.slack.accessToken;
  } catch(e) {
    return null;
  }
}

Meteor.methods({
  getAccessToken: getAccessToken,
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
