import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { forDownload } from './gulp/tasks/forDownload.js';
import { js } from './gulp/tasks/js.js';
import { jsDev } from './gulp/tasks/jsDev.js';


global.app = {
  path,
  gulp,
  plugins,
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.fonts, fonts);
  gulp.watch(path.watch.js, js);
}

const buildTasks = gulp.parallel(copy, html, scss, js, images, fonts, forDownload);
const devTusks = gulp.parallel(copy, html, scss, jsDev, images, fonts, forDownload)

const build = gulp.series(reset, buildTasks);
const dev = gulp.series(reset, devTusks, gulp.parallel(watcher, server));

export { build, dev }
