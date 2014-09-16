Package.describe({
  summary: "SessionVar: like ReactiveVar, but stored in Session",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.export('SessionVar', 'client');

  api.use('session');
  api.addFiles(['core:session-var.js'], 'client');
});
