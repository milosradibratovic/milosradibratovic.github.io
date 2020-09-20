const { src, dest, watch, series } = require('gulp');

const gulpSass = require('gulp-sass');
gulpSass.compiler = require('node-sass');

const imagemin = require('gulp-imagemin');

function copyHtml() {
  return src('src/*html').pipe(dest('./'));
}



function compileScss() {
  return src('src/scss/**/*.scss', { sourcemaps: true })
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(dest('./css', { sourcemaps: '.' }));
}

function watchScss() {
  return watch('./src/scss/**/*.scss', { sourcemaps: true }, compileScss);
}

async function optimizeImages() {
  const result = src('src/images/*').pipe(imagemin()).pipe(dest('./images'))
  await Promise.resolve(result);
}

exports.copyHtml = copyHtml;
exports.compileScss = compileScss;
exports.watchScss = series(watchScss);
exports.optimizeImages = optimizeImages;

