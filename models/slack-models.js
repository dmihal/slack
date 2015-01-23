Slack = {};  

Slack.channels = function(){
  return SlackChannels.find().fetch();
};
Slack.users = function(){
  return SlackUsers.find().fetch();
};
