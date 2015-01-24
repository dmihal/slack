Slack = {};  

Slack.channels = function(query){
  if (Match.test(query, String)){
    return SlackChannels.findOne(query);
  } else {
    return SlackChannels.find(query).fetch();
  }
};
Slack.users = function(query){
  if (Match.test(query, String)){
    return SlackUsers.findOne(query);
  } else {
    return SlackUsers.find(query).fetch();
  }
};
