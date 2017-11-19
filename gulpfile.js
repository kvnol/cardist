const gulp = require('gulp');
const concat = require('gulp-concat');

const files = {
  'cssVendor': [
    'node_modules/normalize.css/normalize.css'
  ]
};

gulp.task('css', () =>
  gulp.src(files.cssVendor)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('assets/css'))
);

gulp.task('default', ['css']);
