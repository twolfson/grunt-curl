module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'tasks/**/*.js', 'test/*.{js,json}'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        // latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: false
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', 'jshint');

};