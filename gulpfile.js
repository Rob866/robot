var gulp = require("gulp");
var browserSync = require("browser-sync").create();



gulp.task("start",function(){
    browserSync.init({
        server: "."
    });


    gulp.watch("*.html").on("change",browserSync.reload);
    gulp.watch("*.css").on("change",browserSync.reload);

});