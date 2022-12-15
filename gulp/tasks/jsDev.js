//в режиме разрааботки отсутсвует babel
import webpack from 'webpack-stream';
import sourcemaps from "gulp-sourcemaps";

import concat from 'gulp-concat';

export const jsDev = () => {
  return (
    app.gulp
      .src(app.path.src.js)
      .pipe(
        webpack({
          mode: 'development',
          output: {
            filename: 'app.js',
          },
        })
      )
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browserSync.stream())
  );
};

