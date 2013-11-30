// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-ui/ui-bootstrap.js',
      'app/bower_components/oauth.io/oauth.js',
      'app/bower_components/flat-ui-official/js/jquery-1.8.3.min.js',
      'app/bower_components/flat-ui-official/js/jquery-ui-1.10.3.custom.min.js',
      'app/bower_components/flat-ui-official/js/jquery.ui.touch-punch.min.js',
      'app/bower_components/flat-ui-official/js/bootstrap.min.js',
      'app/bower_components/flat-ui-official/js/bootstrap-switch.js', 
      'app/bower_components/flat-ui-official/js/flatui-checkbox.js',
      'app/bower_components/flat-ui-official/js/flatui-radio.js',
      'app/bower_components/flat-ui-official/js/jquery.tagsinput.js',
      'app/bower_components/flat-ui-official/js/jquery.placeholder.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

 
    <!-- endbuild -->


    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8090,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
