module.exports = function(grunt) {
	grunt.initConfig({
		less : {
			development : {
				options: {},
				files : {
					"css/sugar.css" : "less/sugar.less"
				}
			},
			production : {
				options: {
					compress : true,
					cleancss : true
				},
				files : {
					"dist/sugar.min.css" : "less/sugar.less"
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.registerTask("default", "less");
};
