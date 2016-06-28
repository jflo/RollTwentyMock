var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task("lint", function() {
    gulp.src("./src/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("test", function() {

});
