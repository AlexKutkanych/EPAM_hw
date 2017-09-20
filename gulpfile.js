var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    spritesmith = require('gulp.spritesmith'),
    watch = require('gulp-watch');


gulp.task('concat-css', function () {
  return gulp.src('css/dist/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass', function () {
  return gulp.src('css/src/*/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/dist'));
});


gulp.task('sprite', function () {
    var spriteData = gulp.src('img/src/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('img/'));
});


gulp.task('watch', function() {
  gulp.watch('css/src/*/*.scss', ['sass']);
  gulp.watch('css/dist/*/*.css', ['concat-css']);
  gulp.watch('img/src/*.png', ['sprite']);
});



