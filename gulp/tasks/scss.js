import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import csso from 'gulp-csso';
import concat from 'gulp-concat';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemap: true })
  .pipe(app.plugins.replace(/@assets\//g, '../assets/'))
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(groupCssMediaQueries())
  .pipe(autoPrefixer({
    grid: true,
    overrideBrowserlist: ["last 3 versions"],
    cascade: false,
  }))
  .pipe(cleanCss())
  .pipe(csso())
  .pipe(concat('index.css'))
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.browserSync.stream());
}