Slack = {};  

Slack.channels = function(){
  return SlackChannels.find().fetch();
}
