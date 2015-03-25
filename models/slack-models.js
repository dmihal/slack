Slack = {};  

Slack.channels = function(query){
  if (Match.test(query, String)){
    return SlackChannels.findOne.apply(SlackChannels, arguments);
  } else {
    return SlackChannels.find.apply(SlackChannels, arguments).fetch();
  }
};
Slack.users = function(query){
  if (Match.test(query, String)){
    return SlackUsers.findOne.apply(SlackUsers, arguments);
  } else {
    return SlackUsers.find.apply(SlackUsers, arguments).fetch();
  }
};
