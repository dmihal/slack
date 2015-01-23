getAccessToken = function(userId) {
  try {
    var user = Meteor.users.findOne(userId);
    return user.services.slack.accessToken;
  } catch(e) {
    return null;
  }
}

slackMethod = function(options){
  return function(args){
    var token = args.token || getAccessToken(this.userId);
    if (!token){
      throw new Error("User is not authenticated with Slack");
    }
    _.extend(args, {token: token});

    var response;
    try {
      response = HTTP.call(options.method, options.url,{
        params: args
      });
    } catch (e){
      throw new Error("Request Error");
    }
    if (response.statusCode === 200 && response.data.ok){
      if (options.parser){
        return options.parser(response.data);
      } else {
        return response.data.channels;
      }
    } else {
      throw new Error("Recieved response code " + response.statusCode);
    }
  };
}

Meteor.methods({
  'slack-channels-list': slackMethod({
    method: 'GET',
    url: 'https://slack.com/api/channels.list',
    parser: function(data){
      return data.channels;
    }
  }),
  'slack-post': slackMethod({
    method: 'POST',
    url: 'https://slack.com/api/chat.postMessage'
  })
});
