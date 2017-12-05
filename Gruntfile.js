module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      all: {
        files: ["views/*"]
      }
    },
    nodemon: {
      dev: {
        scripts: "./app"
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: {
        task: ["nodemon", "watch"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.registerTask("default", ["nodemon"]);
};
