const path = require('path');

const gulp = require('gulp');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('other', other);

gulp.task('clean', clean);

const del = require('del');

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,ts,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
