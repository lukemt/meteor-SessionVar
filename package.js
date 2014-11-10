Package.describe({
  name: 'lume:session-var',
  summary: 'SessionVar: Like ReactiveVar, but stored in Session',
  version: '1.1.3',
  git: 'https://github.com/lukemt/meteor-SessionVar.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.export('SessionVar', 'client');

  api.use('session');
  api.addFiles(['session-var.js'], 'client');
});
