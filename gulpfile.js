const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();



// compile scss to css
function style() {
  return (
    gulp
      // 1. where is my scss file
      .src("./src/scss/**/*.scss")
      // 2. pass that  file through sass compiler
      .pipe(sass().on("error", sass.logError))
      // 3. where do i save the compiled css
      .pipe(gulp.dest("./dist/css"))
      // 4. stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./src/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./dist/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
