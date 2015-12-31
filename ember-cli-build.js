var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
      dotEnv: {
        clientAllowedKeys: ['ADAPTER_URL']
      }
    });

    // app.import("file1.js");
    // app.import("file2.js");

    return app.toTree();
};
