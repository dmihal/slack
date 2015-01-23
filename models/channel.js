
if (Meteor.isClient){
  Meteor.subscribe("SlackChannels");
}
SlackChannels = new Meteor.Collection("SlackChannels", {
  transform: function(collection){
    return new Channel(collection);
  }
});

function Channel(collection){
  _.extend(this, collection);
}
Channel.prototype.postMessage = function(message, options){
  options = options || {};
  options.channel = this.id;
  options.message = message;
  Meteor.call('slack-post', options);
}
