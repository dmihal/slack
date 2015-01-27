Meteor.publish("SlackMessages", function(channel){
  var self = this;
  if (this.userId){
    messages = Meteor.call('slack-channels-history',{
      channel: channel,
      token: getAccessToken(this.userId)
    });
    messages.messages.forEach(function(message){
      message.channel = channel;
      self.added("SlackMessages", message.ts, message);
    });
    this.ready();
  } else {
    return [];
  }
});