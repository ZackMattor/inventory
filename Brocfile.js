/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');
app.import('bower_components/flat-ui/dist/js/flat-ui.js');

app.import('bower_components/flat-ui/dist/css/flat-ui.css');

var Funnel = require('broccoli-funnel');
var bootstrapFonts = new Funnel('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
  srcDir: '/',
  destDir: '/fonts'
});

var flatUIFonts = new Funnel('bower_components/flat-ui/dist/fonts', {
  srcDir: '/',
  destDir: '/fonts'
});

var faFonts = new Funnel('bower_components/fontawesome/fonts', {
  srcDir: '/',
  destDir: '/fonts'
});


module.exports = app.toTree([bootstrapFonts, flatUIFonts, faFonts]);
