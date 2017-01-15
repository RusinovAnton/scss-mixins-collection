var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('css', function(){
    gulp.src('./test/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./test/css'));
});

gulp.task('test', ['css']);

gulp.task('default', ['css']);
