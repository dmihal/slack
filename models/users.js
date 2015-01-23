if (Meteor.isClient){
  Meteor.subscribe("SlackUsers");
}
SlackUsers = new Meteor.Collection("SlackUsers", {
  transform: function(doc){
    return new User(doc);
  }
});

function User(doc){
  _.extend(this, doc);
}
