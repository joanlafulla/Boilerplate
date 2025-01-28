'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

function compileSass() {
    return gulp.src('scss/**/*.scss') // Path to your SCSS files
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css')) // Output directory for CSS files
      .pipe(browserSync.reload({
        stream: true
      }))
  }

  function cleanCss() {
    return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename('my_styles_min.css'))
      .pipe(gulp.dest('css/minified'))
      .pipe(browserSync.reload({
        stream: true
      }))
  }

  function minifyJS() {
    return gulp.src('js/*.js')
    .pipe(minify({
        ext: {
            min: '.min.js'
        },
        noSource: true
    }))
    
    .pipe(gulp.dest('js/minified'))
    .pipe(browserSync.reload({
      stream: true
    }))
  }

  function html(){
    return gulp.src('*.html')
    .pipe(browserSync.reload({
      stream: true
    }))
  }

  gulp.task('browserSync', async function() {
    browserSync.init({
      server: {
        baseDir: './'
      },
    })
  })

  gulp.task('sass', compileSass);
  gulp.task('cleanCSS', cleanCss);
  gulp.task('minifyjs', minifyJS);
  gulp.task('html', html);

  gulp.task('watch', gulp.series('browserSync', 'sass', function() {
    gulp.watch('scss/**/*.scss', gulp.series('sass', 'cleanCSS'));
    gulp.watch('*.html',gulp.series('html') );
    gulp.watch('js/*.js', gulp.series('minifyjs'));
  }));

  

 