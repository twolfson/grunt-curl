module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    curl: {
      js: {
        src: 'http://cdnjs.cloudflare.com/ajax/libs/labjs/2.0.3/LAB.min.js',
        dest: 'actual/file.js'
      },
      zip: {
        src: 'http://twitter.github.com/bootstrap/assets/bootstrap.zip',
        dest: 'actual/file.zip'
      }
    },
    'curl-dir': {
      multi: {
        src: [
          'http://cdnjs.cloudflare.com/ajax/libs/labjs/2.0.3/LAB.min.js',
          'http://cdnjs.cloudflare.com/ajax/libs/cookiejar/0.5/cookiejar.js'
        ],
        dest: 'actual/multi'
      // },
      // braceExpansion: {
      //   src: [
      //     'http://cdnjs.cloudflare.com/ajax/libs/{labjs/2.0.3/LAB.min,cookiejar/0.5/cookiejar}.js'
      //   ],
      //   dest: 'actual/braceExpansion'
      // },
      // router: {
      //   src: [
      //     'http://cdnjs.cloudflare.com/ajax/libs/labjs/2.0.3/LAB.min.js',
      //     'http://cdnjs.cloudflare.com/ajax/libs/cookiejar/0.5/cookiejar.js'
      //   ],
      //   router: function curlDirRouter (url) {
      //     return url.replace('http://cdnjs.cloudflare.com/', '');
      //   },
      //   dest: 'actual/router'
      }
    },
    test: {
      all: '*_test.js'
    }
  });

  // Load local tasks.
  grunt.loadTasks('../tasks');

  // Run project task then tests.
  grunt.registerTask('default', 'curl curl-dir test');
};