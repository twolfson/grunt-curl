module.exports = function (grunt) {
  // Load in legacy config
  require('./grunt')(grunt);

  // Run project tasks
  grunt.registerTask('default', ['curl', 'curl-dir']);
};
