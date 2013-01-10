module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    'curl': {
      all: {
        src: ['test_files/file.js'],
        dest: 'actual/file.js'
      }
    },
    test: {
      all: '*_test.js'
    }
  });

  // Load local tasks.
  grunt.loadTasks('../tasks');

  // Run project task then tests.
  grunt.registerTask('default', 'curl test');
};