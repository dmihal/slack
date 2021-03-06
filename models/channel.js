
if (Meteor.isClient){
  Meteor.subscribe("SlackChannels");
}
SlackChannels = new Meteor.Collection("SlackChannels", {
  transform: function(collection){
    return new Channel(collection);
  }
});

function Channel(collection){
  collection._members = collection.members;
  delete collection.members;
  _.extend(this, collection);
}
Channel.prototype.postMessage = function(message, options){
  options = options || {};
  options.channel = this.id;
  options.text = message;
  options.username = options.username || "Slackbot";
  Meteor.call('slack-post', options);
};
Channel.prototype.members = function(){
  return this._members.map(Slack.users);
}
