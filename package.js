Package.describe({
  name: 'dmihal:slack',
  version: '0.0.1',
  summary: 'Allows access to the Meteor API and other reactive features',
  git: 'https://github.com/dmihal/slack.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('livedata',['client','server']);
  api.use('http', ['server']);
  api.use('acemtp:accounts-slack',['client','server']);
  api.use('service-configuration', 'server');
  
  api.versionsFrom('1.0.3.1');
  api.addFiles('slack-server.js','server');
  api.addFiles('channels.js','server');
  api.addFiles('slack-client.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dmihal:slack');
  api.addFiles('dmihal:slack-tests.js');
});
