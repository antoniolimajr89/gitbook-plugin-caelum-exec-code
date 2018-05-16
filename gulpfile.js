const gulp = require('gulp')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const minifyCss = require('gulp-clean-css');
const babel = require('gulp-babel');
 
gulp.task('html', function () {
    return gulp.src('./plugin/components/src/index.html')
        .pipe(useref())
        // .pipe(gulpif('*.js',
        //     babel({ presets: ['env'] })
        // ))
        // .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('./plugin/components/dist'));
});