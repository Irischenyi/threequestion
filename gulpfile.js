var gulp = require('gulp');
var less = require('gulp-less'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');
var htmlmin = require('gulp-htmlmin'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify');
var path = require('path'); //test
var concat = require('gulp-concat');


gulp.task('less', function(){
    console.log('testless');
     gulp.src('css/*.less')
        .pipe(less({}))
        .pipe(gulp.dest('css'));
    gulp.src('index.html')
        .pipe(livereload());
});

gulp.task('testWatch',function(){
    livereload.listen();
    gulp.watch('js/*.js',['jslisten']);
    gulp.watch('js/define/*.js',['jslisten']);
    gulp.watch('css/*.less',['less']);
    gulp.watch('*.html',['htmllisten']);
});

gulp.task('connect', function(){
    connect.server({
        livereload:true
    });
});

gulp.task('html', function(){
    gulp.src('*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('build'));
});

gulp.task('cssmin', function(){
    gulp.src('css/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('build/css'));
});

gulp.task('minjs',function(){
    gulp.src('js/control.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
    gulp.src('js/define/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js/define'));
    gulp.src('js/src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js/src'));
});

gulp.task('jslisten', function(){
    gulp.src('js/define/*.js')
        .pipe(livereload());
    gulp.src('js/*.js')
        .pipe(livereload());
});
gulp.task('htmllisten', function(){
    gulp.src('*.html')
        .pipe(livereload());
});
// gulp.task('concatjs', function(){
//     gulp.src('js/define/*.js')
//         .pipe(concat('define/all.js'))
//         .pipe(gulp.dest('build/js'));
// });
//合并js

gulp.task('default', ['less','connect','testWatch']);
gulp.task('build',['html','cssmin','minjs']);
