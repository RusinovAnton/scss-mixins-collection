var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gutil');

gulp.task('css', function(){
    gulp.src('./test/scss/style.scss')
        .pipe(sass())
        .(gulp.dest('./test/css'));
});

gulp.task('test', ['css'], function(){
    console.log('Pretty much it');
});

gulp.task('default', ['test'], function(){

});