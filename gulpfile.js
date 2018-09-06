let gulp        = require('gulp');
let sass        = require('gulp-sass');
let browserSync = require('browser-sync').create();

// static server + watching scss/html archives
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

// compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
