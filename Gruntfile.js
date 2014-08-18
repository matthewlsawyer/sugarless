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
		}
	});
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.registerTask("default", "less");
};
