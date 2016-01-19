'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	sass : {
		// from : 'app/**/*.scss',
		from : './scss/**/*.scss',
		to : './assets/'
	}
}

gulp.task('sass', function() {
    gulp.src( config.sass.from )
        .pipe(sass({
        	outFile : 'layout.css',
        	outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest( config.sass.to ));
});

gulp.task('sass:watch', function(){
    gulp.watch(config.sass.from, ['sass']);
})

//Watch task
gulp.task('default',['sass:watch']);