import webpack from 'webpack-stream';
import babel from 'gulp-babel';
import sourcemaps from "gulp-sourcemaps";

import concat from 'gulp-concat';

export const js = () => {
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
      .pipe(babel())
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browserSync.stream())
  );
};

