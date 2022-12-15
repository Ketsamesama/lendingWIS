import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js`,
    css: `${buildFolder}/style`,
    html: buildFolder,
    images: `${buildFolder}/assets/img`,
    fonts: `${buildFolder}/assets/fonts`,
    forDownload: `${buildFolder}/assets/forDownload`,
    files: `${buildFolder}`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/assets/img/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    scss: `${srcFolder}/style/*.scss`,
    html: `${srcFolder}/*.html`,
    fonts: `${srcFolder}/assets/fonts/*.ttf`,
    forDownload: `${srcFolder}/assets/forDownload/*.{jpg,pdf,docx}`,
    files: `${srcFolder}files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/assets/img/*.{jpg,jpeg,png,gif,webp,svg, ico}`,
    scss: `${srcFolder}/style/*.scss`,
    html: `${srcFolder}/html/**/*.html`,
    fonts: `${srcFolder}/assets/fonts/*.ttf`,
    forDownload: `${srcFolder}/assets/forDownload/*.{jpg,pdf,docx}`,
    files: `${srcFolder}/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
