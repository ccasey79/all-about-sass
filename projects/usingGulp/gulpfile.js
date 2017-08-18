const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');



/* TOP LEVEL FUNCTIONS TASKS

  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes

*/

// LOGS MESSAGE

gulp.task('message', function() {
  return console.log('Gulp is running...');
});

// COPY ALL HTML FILES

gulp.task('copyHtml', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
})

// OPTIMISE IMAGES

gulp.task('imageMin', () =>
  gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
);

// COMPILE SASS

gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

// GULP TASKS ALTOGETHER

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass']);

// GULP WATCH

gulp.task('watch', function(){
  gulp.watch();
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});
