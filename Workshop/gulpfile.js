var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css'),
    watch = require('gulp-watch');

 
gulp.task('concat-css', function () {
  return gulp.src('css/dist/*/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});
 
gulp.task('sass', function () {
  return gulp.src('css/src/*/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/dist'));
});

gulp.task('watch', ['concat-css'], function() {
  // watch for CSS changes
  gulp.watch('css/dist/blocks/**/*.css', function() {
    // run styles upon changes
    gulp.run('concat-css');
  });
});

