var gulp = require('gulp')
    , mocha = require('gulp-mocha')
    , gutil = require('gulp-util')
    , browserify = require('browserify')
    , source = require('vinyl-source-stream')
;

gulp.task('browserify', function(){
    gulp.start('browserify-client', 'browserify-angular');
})

gulp.task('browserify-client', function () {

    return browserify({
            debug: true,
            entries: ['./src/index.js']
        }).bundle()
        .pipe(source('cond-eval.js'))
        .pipe(gulp.dest('./dist'))
    ;
});

gulp.task('browserify-angular', function () {

    return browserify({
            debug: true,
            entries: ['./src/index.angular.js']
        }).bundle()
        .pipe(source('cond-eval.angular.js'))
        .pipe(gulp.dest('./dist'))
    ;
});

gulp.task('mocha', function() {
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
    gulp.watch(['src/**/*.js', 'test/**/*.js'], ['mocha']);
});