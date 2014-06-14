/*
 * grunt-curl
 * https://github.com/twolfson/grunt-curl
 *
 * Copyright (c) 2013 Todd Wolfson
 * Licensed under the MIT license.
 */

var fs = require('fs'),
    path = require('path'),
    gruntRetro = require('grunt-retro'),
    request = require('request'),
    async = require('async'),
    _ = require('lodash');
module.exports = function (grunt) {
  // Load in grunt-retro
  grunt = gruntRetro(grunt);

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('curl', 'Download files from the internet via grunt.', function () {
    // Collect the filepaths we need
    var file = this.file,
        data = this.data,
        src = file.src,
        dest = file.dest,
        done = this.async(),
        that = this;

    // If we have received an array, condense it
    // DEV: If there are multiple files, we cannot concatenate them since that requires buffering
    // DEV: which creates issues with large files. As a result, do not allow multiple files.
    var srcFile = src;
    var srcFiles = srcFile;
    if (Array.isArray(srcFiles)) {
      // If there were no files found, be informative
      if (srcFiles.length === 0) {
        grunt.fail.warn('No source files were specified. Stopping `grunt-curl` early.');
        return done();
      // Otherwise, if there were too many files, complain and leave
      } else if (srcFiles.length > 1) {
        grunt.fail.warn('Too many source files received. Expected: 1, Actual: ' + srcFiles.length + '. Stopping `grunt-curl` early.');
        return done();
      }

      // Collapse first element
      srcFile = srcFiles[0];
    }

    // Asynchronously fetch the files in parallel
    grunt.helper('curl', srcFile, function curlResultFn (err, res) {
      // If there is an error, fail
      if (err) {
        grunt.fail.warn(err);
        return done();
      }

      // Write out the content
      var destDir = path.dirname(dest);
      grunt.file.mkdir(destDir);
      var writeStream = fs.createWriteStream(dest);

      // If there is an error with the stream, exit
      writeStream.on('error', function handleError (err) {
        grunt.fai.warn(err);
        return done();
      });

      // When the stream completes, exit
      res.pipe(fs.createWriteStream(dest));
      res.on('end', function finishWrite () {
        // Otherwise, print a success message.
        grunt.log.writeln('File "' + dest + '" created.');

        // Callback
        done();
      });
    });
  });

  grunt.registerMultiTask('curl-dir', 'Download collections of files from the internet via grunt.', function () {
    // Collect the filepaths we need
    var file = this.file,
        src = file.src,
        dest = file.dest,
        data = this.data,
        router = data.router || function defaultRouter (filepath) {
          if (typeof filepath !== 'string') {
            filepath = filepath.url || filepath.uri;
          }
          return path.basename(filepath);
        },
        done = this.async(),
        that = this;

    // Upcast the srcFiles to an array
    var srcFiles = src;
    if (!Array.isArray(srcFiles)) {
      srcFiles = [src];
    }

    // Iterate over the array and expand the braces
    var minimatch = grunt.file.glob.minimatch,
        braceExpand = minimatch.braceExpand;
    srcFiles = srcFiles.reduce(function expandSrcFiles (retArr, srcFile) {
      var srcFileArr = typeof srcFile === 'string' ? braceExpand(srcFile) : [srcFile];
      retArr = retArr.concat(srcFileArr);
      return retArr;
    }, []);

    // Asynchronously fetch the files in parallel
    async.map(srcFiles, grunt.helper.bind(grunt, 'curl'), curlResultFn);

    function curlResultFn(err, resArr) {
      // If there is an error, fail
      if (err) {
        grunt.fail.warn(err);
        return done();
      }

      // Determine the destinations
      var fileInfos = srcFiles.map(function getDest (srcFile, i) {
            // Route the file, append it to dest, and return
            var filepath = router(srcFile),
                retStr = path.join(dest, filepath);
            return {
              srcFile: srcFile,
              destPath: retStr,
              res: resArr[i]
            };
          });

      // Iterate over each of the files
      async.forEach(fileInfos, function writeCurlFiles (fileInfo, cb) {
        // Create a directory for the content
        var destPath = fileInfo.destPath;
        var destDir = path.dirname(destPath);
        grunt.file.mkdir(destDir);

        // Write out the content and handle errors
        var res = fileInfo.res;
        var writeStream = fs.createWriteStream(destPath, res);
        writeStream.on('error', cb);
        res.pipe(writeStream);

        // When the stream completes, callback
        res.on('end', cb);
      }, function handleCompletion (err) {
        // If there was an error, log and exit with it
        if (err) {
          grunt.fail.warn(err);
          return done();
        }

        // Otherwise, print a success message.
        grunt.log.writeln('Files "' + destArr.join('", "') + '" created.');

        // Callback
        done();
      });
    }
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  // Register our curl helper
  grunt.registerHelper('curl', function (options, cb) {
    // Default to a binary request
    if (typeof options === 'string') {
      options = {'url': options};
    }
    var params = _.extend({'encoding': 'binary'}, options);

    // Request the url
    var req = request(params);

    // On error, callback
    req.on('error', cb);

    // On response, callback for writing out the stream
    req.on('response', function handleResponse (res) {
      // Assert the statusCode was good
      var statusCode = res.statusCode;
      if (statusCode < 200 || statusCode >= 300) {
        return cb(new Error('Fetching ' + JSON.stringify(options) + ' failed with HTTP status code ' + statusCode));
      }

      // Otherwise, callback with the stream
      cb(null, res);
    });
  });
};
