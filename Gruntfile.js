module.exports = function(grunt) {
  grunt.initConfig({
    less : {
      development : {
        options: {},
        files : {
          "dist/css/sugar.css" : "src/less/sugar.less"
        }
      },
      production : {
        options: {
          compress : true,
          cleancss : true
        },
        files : {
          "dist/css/sugar.min.css" : "src/less/sugar.less"
        }
      }
    },
    copy : {
      main : {
        files : [
          { expand : true, cwd : "bower_components/font-awesome/fonts/", src : ["*"], dest : "dist/fonts/", filter : "isFile" }
        ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.registerTask("default", [ "less", "copy" ]);
};
