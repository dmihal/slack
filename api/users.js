Meteor.publish("SlackUsers",function(){
  var self = this;
  if (this.userId){
    users = Meteor.call('slack-users-list',{
      token: getAccessToken(this.userId)
    });
    users.forEach(function(user){
      self.added("SlackUsers", user.id, user);
    });
    this.ready();
  } else {
    return [];
  } 
});
