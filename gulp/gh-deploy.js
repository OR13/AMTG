'use strict';

var gulp    = require('gulp');

var $       = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

var gghp    = require('gulp-gh-pages');

var debug = require('gulp-debug');

var package_json = require('../package.json')

module.exports = function(options) {
  gulp.task('gh-deploy', [], function () {

    var options = { 
      branch:  'gh-pages', 
      message: "v" + package_json.version
    }

    return gulp.src('./dist/**/*')
    
      .pipe( debug() )
      .pipe( gghp(options)  );

  });

};
