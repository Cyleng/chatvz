const gulp = require('gulp');
const {src, dest, series, parallel, task} = require('gulp');
const del = require('del');
const browsersync = require('browser-sync');
const concat = require('gulp-concat');
const htmlReplace = require('gulp-html-replace');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// function browserSync {
//     return browsersync.init({
//         server:{
//             baseDir: './dist',
//         },
//         port:3000,
//     });
// }

function htmlTask(){
    return gulp.src('src/pub/*.html')
    .pipe(gulp.dest('dist/pub'))
}

function cssTask(){
    return gulp.src('src/pub/css/*.css')
    .pipe(gulp.dest('dist/pub/css'))
}

function imageTask(){
    return gulp.src('src/pub/img/*.{jpg, jpeg, png, gif}')
    .pipe(gulp.dest('dist/pub/img'))
}

function scriptTask(){
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
}

function cleanTask(){
    return del('dist/**/*');
}

function buildTask(){

}




exports.html = htmlTask;
exports.styles = cssTask;
exports.scripts = scriptTask;
exports.images = imageTask;
// exports.watch = browserSync;
exports.dev = series(
    parallel(htmlTask, scriptTask, cssTask, imageTask)
    // parallel(browserSync)
);
exports.default = parallel(htmlTask, cssTask, scriptTask);

