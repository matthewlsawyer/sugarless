var del     = require("del");
var bower	  = require("bower");
var gulp    = require("gulp");
var less    = require("gulp-less");
var rename  = require("gulp-rename");
var minify  = require("gulp-minify-css");

var paths = {
  lessSrc : "src/less/sugar.less",
  cssDest : "dist/css/",
  fontDest : "dist/fonts",
  bowerDir : "bower_components/"
};

gulp.task("default", ["build"]);

gulp.task("build", ["clean", "less", "fonts"]);

gulp.task("clean", function(cb) {
  del("dist", cb);
});

gulp.task("less", ["bower"], function() {
  return gulp.src(paths.lessSrc)
  .pipe(less())
  .pipe(rename("sugar.css"))
  .pipe(gulp.dest(paths.cssDest))
  .pipe(minify())
  .pipe(rename("sugar.min.css"))
  .pipe(gulp.dest(paths.cssDest));
});

gulp.task("fonts", ["bower"], function() {
  return gulp.src(paths.bowerDir + "font-awesome/fonts/*.*")
  .pipe(gulp.dest(paths.fontDest));
});

gulp.task("bower", function(cb) {
  bower.commands.install()
  .on("end", function() {
    cb();
  });
});
