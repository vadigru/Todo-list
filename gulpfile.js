var gulp = require("gulp");
var csso = require("gulp-csso");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var sourcemap = require("gulp-sourcemaps");

gulp.task ("css", function () {
  return gulp.src("source/css/main.css")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(csso())
    .pipe(rename("main.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("markup/css"))
    .pipe(server.stream());
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
  .pipe(gulp.dest("markup"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("server", function () {
  server.init({
    server: "markup/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/css/*.css", gulp.series("css", "refresh"));
});

gulp.task("build", gulp.series(
  "html",
  "css",
));

gulp.task("start", gulp.series("build", "server"));
