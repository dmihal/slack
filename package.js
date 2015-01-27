Package.describe({
  name: 'dmihal:slack',
  version: '0.1.0',
  summary: 'Allows access to the Meteor API and other reactive features',
  git: 'https://github.com/dmihal/slack.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('livedata',['client','server']);
  api.use('http', ['server']);
  api.use('underscore', ['client','server']);
  api.use('acemtp:accounts-slack@1.0.0',['client','server']);
  api.use('service-configuration', 'server');
  
  api.versionsFrom('1.0.1');
  api.addFiles('lib/misc.js','server');
  api.addFiles('api/slack-server.js','server');
  api.addFiles('api/channels.js','server');
  api.addFiles('api/messages.js','server');
  api.addFiles('api/users.js','server');

  api.addFiles('slack-client.js','client');
  api.addFiles('models/slack-models.js',['client','server']);
  api.addFiles('models/channel.js',['client','server']);
  api.addFiles('models/messages.js',['client','server']);
  api.addFiles('models/users.js',['client','server']);

  api.export('Slack');
});
