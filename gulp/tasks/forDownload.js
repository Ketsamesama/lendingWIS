export const forDownload = () => {
  return app.gulp.src(app.path.src.forDownload)
  .pipe(app.gulp.dest(app.path.build.forDownload))
  .pipe(app.plugins.browserSync.stream());
}