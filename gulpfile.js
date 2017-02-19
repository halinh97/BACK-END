var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');


gulp.task('lint-js',function () {
  return gulp.src('BE_2/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});


gulp.task('lint-css', function() {
  return gulp.src('BE_2/css/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter(require('csslint-stylish')))
});

 gulp.task('start',function(){
   nodemon({
     script: 'app.js'
    ,ext: 'js html'
    , env:{'NODE_ENV':'development'}

    })
  })

  gulp.task('default', ['lint-css','lint-js' ,'start']);
