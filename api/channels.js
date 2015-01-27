Meteor.publish("SlackChannels", function(){
  var self = this;
  if (this.userId){
    collections = Meteor.call('slack-channels-list',{
      token: getAccessToken(this.userId)
    });
    collections.forEach(function(collection){
      makeDate(collection,'created');
      makeDate(collection,'purpose.last_set');
      makeDate(collection,'topic.last_set');
      self.added("SlackChannels", collection.id, collection);
    });
    this.ready();
  } else {
    return [];
  }
});
