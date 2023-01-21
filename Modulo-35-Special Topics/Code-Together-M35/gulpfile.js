const {series} = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass')(require('node-sass'));

// Compilador sass para css
function tarefaSass(cb){
    gulp.src('./assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'))
    cb()
};

// Chamada para servidor gulp
gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch([
        './assets/scss/*',
        './assets/js/*',
        './assets/css/style.css',
        './index.html',
    ]).on('change', process)
    gulp.watch([
        './assets/scss/*',
        './assets/js/*',
        './assets/css/style.css',
        './index.html',
    ]).on('change', reload)
});


// Retorno do fim do processo
function end(cb){
    console.log("Tarefas concluidas")
    return cb()
}

const process = series(tarefaSass, end)
exports.sass = tarefaSass //Para executar de forma individual, execute no terminal o comando: gulp sass
exports.default = process