const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
// const uglify = require('gulp-uglify');

gulp.task('sass', () =>
  gulp
    .src('build/**.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(gulp.dest('dist'))
    .pipe(cleanCSS({ compatibility: 'ie11' }))
    .pipe(
      rename((path) => {
        path.basename += '.min';
      }),
    )
    .pipe(gulp.dest('dist')),
);

gulp.task('build', ['sass']);
