'use strict';

/**
 * Gulpfile.js tasks runner --->
 */

var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var browserify  = require('gulp-browserify');
var debowerify  = require('debowerify');

/**
 * Lint
 */
gulp.task('lint', function()
{
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/**
 * Copy CSS
 */
gulp.task('css', function()
{
    return gulp.src('app/assets/css/*.css')
        .pipe(gulp.dest('./public/css'));
});

/**
 * Copy JS
 */
gulp.task('js', function()
{
    return gulp.src('./app/assets/**/*.js')
        .pipe(browserify({ debug: true }))
        .pipe(debowerify({ debug: true }))
        .pipe(uglify())
        .pipe(rename('mallorcajs.min.js'))
        .pipe(gulp.dest('./public/js'));
});

/**
 * Copy Images
 */
gulp.task('img', function()
{
    return gulp.src('./app/assets/img/*')
        .pipe(gulp.dest('./public/img'));
});

/**
 * Default: $ gulp
 */
gulp.task('default', ['lint', 'js', 'img']);