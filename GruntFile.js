module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'build/js/app.js': ['src/js/*.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, cwd:'src/css/', src: ['**'], dest: 'build/css/'},
          {expand: true, cwd:'src/img/',  src: ['**'], dest: 'build/img/'},
          {expand: true, cwd:'src/', src: 'index.html', dest: 'build/'},
          {expand: true, cwd:'src/partials/', src: ['**'], dest: 'build/partials'}
        ],
      },
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'src/css/',
        src: ["*.css"],
        dest: 'build/css/',
        ext: '.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','copy','cssmin']);

};
