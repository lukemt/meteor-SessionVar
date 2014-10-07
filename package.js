Package.describe({
  summary: "SessionVar: Like ReactiveVar, but stored in Session",
  version: "1.1.0",
  git: "https://github.com/lukemt/meteor-SessionVar.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.export('SessionVar', 'client');

  api.use('session');
  api.addFiles(['session-var.js'], 'client');
});
