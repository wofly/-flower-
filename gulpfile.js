let gulp = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let cleanscc = require('gulp-clean-css');
gulp.task('css',function(){
	gulp.src('./sass/flower.scss')
	.pipe(sass())
	//.pipe(cssnano())
	.pipe(gulp.dest('./css'))
});
gulp.task('aa',function(){
	gulp.watch(['./sass/flower.scss'],['css'])
})