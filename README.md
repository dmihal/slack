Integrate your team's Slack site with your Meteor site!

This package is still in an alpha stage, GitHub issues and pull requests are welcome!

Quick Start
-----------
1. Add the Meteor packages [`accounts-slack`](https://atmospherejs.com/acemtp/accounts-slack) and `slack` to your project
```
    meteor add acemtp:accounts-slack
    meteor add dmihal:slack
```
2. Authenticate the user with Slack. Use `Meteor.loginWithSlack` or simply use the `loginButtons` template with the `accounts-ui` package.
3. Use methods like `Slack.channels()` and `Slack.users()` to access Slack information. Read the documentation below for more information.

Documentation
-------------

### Slack.channels([query])
Returns an array of Channel objects representing each public channel on the user's Slack team.

**Arguments**

**`query`:** Channel ID or Mongo-style selector

### Slack.users([query])
Returns an array of User objects.

**Arguments**

**`query`:** User ID or Mongo-style selector

### Channel
The Channel object contains all the properties of a [Slack Channel object](https://api.slack.com/types/channel).

### Channel.members()
Returns an array of users that have joined the channel

### Channel.postMessage(message, [options])
Posts a message to the channel from a bot.

**Arguments**

**`message`:** *String* Message to post in the channel  
**`options.username`:** *String* Username the message will appear from. Defaults to 'Slackbot'

### User
The User object contains all the properties of a [Slack User object](https://api.slack.com/types/user).

Licence
=======
Copyright (c) 2015 David Mihal.

This projected is licensed under the terms of the MIT license.
