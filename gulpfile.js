const gulp = require('gulp');
const {src, dest, series, parallel} = require('gulp');
const del = require('del');

gulp.task('html', function(){
    return gulp.src('src/pub/*.html')
    .pipe(gulp.dest('dist/pub'))
})

gulp.task('css', function(){
    return gulp.src('src/pub/css/*.css')
    .pipe(gulp.dest('dist/pub/css'))
})

gulp.task('image', function(){
    return gulp.src('src/pub/img/*.{jpg, jpeg, png, gif}')
    .pipe(gulp.dest('dist/pub/img'))
})

gulp.task('script', function(){
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
})

gulp.task('clean',function(){
    return del('dist/**/*');
})

gulp.task('build', ['css', 'script', 'image'], function(){
    gulp.start('html');
})

gulp.task('default',['clean'], function(){
    gulp.start('build');
})


