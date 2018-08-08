var gulp = require('gulp'),
    sass = require('gulp-sass');

function css() {
    return gulp
        .src('./test/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./test/css'));
}

gulp.task('test', css);
