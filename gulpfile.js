"use-strict";

let gulp = require("gulp");
let sass = require("gulp-sass");

let paths = {
    scss: "./styles/scss/*.scss",
    scssDest: "./styles/"
};

gulp.task('default', function() {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.scssDest));
});

gulp.task('watch', function() {
    gulp.watch(paths.scss, gulp.series('default'));
});