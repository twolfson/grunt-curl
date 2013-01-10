/*
 * grunt-curl
 * https://github.com/twolfson/grunt-curl
 *
 * Copyright (c) 2013 Todd Wolfson
 * Licensed under the MIT license.
 */

var request = require('request');
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
        srcFiles = src,
        dest = file.dest,
        callback = this.async();

    // Upcast the src to an array
    if (!Array.isArray(srcFiles)) {
      srcFiles = [src];
    }

    // Asynchronously fetch the files in parallel
    grunt.async.map(srcFiles, grunt.helper.bind(grunt, 'curl'));

    // Concatenate the srcFiles, process the blob through our helper,
    var separator = data.separator || '\n',
        content = curlFiles.join(separator);

    // Write out the content
    grunt.file.write(dest, content);

    // Fail task if errors were logged.
    if (this.errorCount) { return false; }

    // Otherwise, print a success message.
    grunt.log.writeln('File "' + this.file.dest + '" created.');
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('curl', request.get);

};
