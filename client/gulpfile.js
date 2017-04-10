const gulp         = require('gulp');
const environments = require('gulp-environments');
const HubRegistry  = require('gulp-hub');

var development  = environments.development;

if (development())
{ console.log("Environment is: development")
  const browserSync = require('browser-sync');
}
else
{
  console.log("Environment is: production")
}

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));
gulp.task('default', gulp.series('clean', 'build'));

if (development())
{
  gulp.task('test', gulp.series('karma:single-run'));
  gulp.task('test:auto', gulp.series('karma:auto-run'));
  gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
  gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
  gulp.task('watch', watch);
  gulp.task("ci", gulp.series("build", "test"));

  function reloadBrowserSync(cb) {
    browserSync.reload();
    cb();
  }

  function watch(done) {
    gulp.watch(conf.path.tmp('index.html'), reloadBrowserSync);
    done();
  }
}
