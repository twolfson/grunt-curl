/*
 * grunt-curl
 * https://github.com/twolfson/grunt-curl
 *
 * Copyright (c) 2013 Todd Wolfson
 * Licensed under the MIT license.
 */

var fs = require('fs'),
    path = require('path'),
    request = require('request');
module.exports = function (grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('curl', 'Your task description goes here.', function () {
    // Collect the filepaths we need
    var file = this.file,
        data = this.data,
        src = file.src,
        dest = file.dest,
        done = this.async(),
        that = this;

    // Upcast the srcFiles to an array
    var srcFiles = src;
    if (!Array.isArray(srcFiles)) {
      srcFiles = [src];
    }

    // Asynchronously fetch the files in parallel
    var async = grunt.utils.async;
    async.map(srcFiles, grunt.helper.bind(grunt, 'curl'), curlResultFn);

    function curlResultFn(err, files) {
      // If there is an error, fail
      if (err) {
        return grunt.fail.fatal(err);
      }

      // Concatenate the srcFiles, process the blob through our helper,
      var separator = data.separator || '\n',
          content = files.join(separator);

      // Write out the content
      var destDir = path.dirname(dest);
      grunt.file.mkdir(destDir);
      fs.writeFileSync(dest, content, 'binary');

      // Fail task if errors were logged.
      if (that.errorCount) { return false; }

      // Otherwise, print a success message.
      grunt.log.writeln('File "' + dest + '" created.');

      // Callback
      done();
    }
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('curl', function (url, cb) {
    // Request the url
    request.get({'url': url, 'encoding': 'binary'}, function (err, res, body) {
      // Callback with the error and body
      cb(err, body);
    });
  });

};