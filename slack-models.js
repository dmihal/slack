Slack = {};  

if (Meteor.isClient){
  Meteor.subscribe("SlackChannels");
}
SlackChannels = new Meteor.Collection("SlackChannels");

Slack.channels = function(){
  return SlackChannels.find().fetch();
}
