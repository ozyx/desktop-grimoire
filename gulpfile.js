
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const gulp_tslint = require('gulp-tslint');

gulp.task('tslint', () => {
    return gulp.src(['**/*.ts', '!**/*.d.ts', '!node_modules/**'])
        .pipe(gulp_tslint())
        .pipe(gulp_tslint.report());
});

gulp.task("build", ['tslint'], function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("default", ['build']);
