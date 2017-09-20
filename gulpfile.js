var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    watch = require('gulp-watch');
var sprite = require('gulp-sprite-generator');

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

gulp.task('sprites', function() {
    var spriteOutput;

    spriteOutput = gulp.src("./css/src/*.css")
        .pipe(sprite({
            baseUrl:         "./img/",
            spriteSheetName: "sprite.png",
            spriteSheetPath: "/img"
        })
    )

    spriteOutput.css.pipe(gulp.dest("./dist/css"));
    spriteOutput.img.pipe(gulp.dest("./dist/image"));
});


gulp.task('watch', function() {
  gulp.watch('css/src/*/*.scss', ['sass']);
  gulp.watch('css/dist/*/*.css', ['concat-css']);
});



