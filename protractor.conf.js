exports.config = {
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // Spec patterns are relative to this directory.
    specs: [
      'features/*.feature'
    ],
    capabilities: {
        'browserName': 'chrome'
    },

    cucumberOpts: {
        require: 'features/step_definitions/*.js',
    }
};
