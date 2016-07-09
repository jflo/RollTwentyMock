var gulp = require('gulp');
var pump = require('pump');

var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

gulp.task("lint", function(cb) {
    "use strict";

    pump([
        gulp.src('src/*.js'),
        jshint(),
        jshint.reporter("default")
    ], cb);
});

gulp.task('test', function (cb) {
    "use strict";

    pump([
        gulp.src('tests/*'),
        jasmine()
    ], cb);
});
