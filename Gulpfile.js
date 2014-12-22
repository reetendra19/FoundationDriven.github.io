var gulp = require('gulp');
var compass = require('gulp-compass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
gulp.task('default', function(){
	gulp.watch('./sass/**/*', ['sass']);
	gulp.watch('./coffee/**/*', ['coffee']);
});
gulp.task('sass', function(){
	gulp.src('./sass/**/*')
		.pipe(compass({
			css: './css/',
			sass: './sass/',
			require: ['susy']
		}))
		.pipe(gulp.dest('./css/'));
});
gulp.task('coffee', function(){
	gulp.src('./coffee/**/*')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('./js/'));
});
