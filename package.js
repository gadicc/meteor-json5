Package.describe({
  name: 'gadicc:json5',
  version: '0.5.0-0',
  summary: 'Wrapper for JSON5 (on the server) - see json5.org',
  git: 'https://github.com/gadicc/meteor-json5',
  documentation: 'README.md'
});

Npm.depends({
  'json5': '0.5.0'
});

Package.onUse(function(api) {
  api.addFiles('json5-server.js', 'server');
  api.export('JSON5');
});
