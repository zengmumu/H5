// gulp file js 运行 node js   去执行 gulp 命令
// 把less 编译成css
var gulp = require("gulp");// 从 nodeModules 引入  gulp
var less = require("gulp-less");// 引入 less编译器
var mincss =  require("gulp-minify-css");
var minhtml = require("gulp-htmlmin");
var minjs = require("gulp-uglify");
var concat= require("gulp-concat");
var auto = require("gulp-autoprefixer");

/*gulp.task("mcss",function(){
	gulp.src("src/css/*.css")
	.pipe(mincss(
		{
			keepBreaks:true,
			beautify:true,
			compatibility:true,//兼容ie7
			keepBreaks:true,
		}
		))
	.pipe(gulp.dest("dist/css/"))
})
*/
// 执行一个gulp 任务
gulp.task("mincss",function(){
	// 1执行谁   2，执行什么命令  3.执行完放到哪儿
	// 1执行谁
	gulp.src("src/css/*.css")
	
	
	// 压缩css
	.pipe(mincss(
		{
			
			beautify:true,
			compatibility:true,//兼容ie7
			keepBreaks:true,
		}
		))
	.pipe(auto({
		 browsers: ['last 5 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:false //是否去掉不必要的前缀 默认：true 
	}))
	
	.pipe(gulp.dest("dist/css"));
})

gulp.task("minhtml",function(){
	gulp.src("src/*.html")
	.pipe(minhtml({
		removeComments: true,//清除HTML注释
        collapseWhitespace: false,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS	
		
	}))
	.pipe(gulp.dest("dist"))
})

gulp.task("minjs",function(){
	gulp.src([
		"src/lib/bootstrap-3.0.0/js/bootstrap.js",
		"src/lib/bootstrap-3.0.0/js/jquery-1.8.3.min.js",
		"src/lib/angular/angular.js",
		"src/lib/angular/angular-route.js"
		])
	.pipe(minjs({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
           
        }))
//  .pipe(concat("lib.js"))
	.pipe(gulp.dest("dist/lib"))
})

gulp.task("myminjs",function(){
	gulp.src("src/js/**/*.js")
	.pipe(minjs({
            mangle: false,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
           
        }))
    .pipe(concat("custom.js"))
	.pipe(gulp.dest("dist/js"))
})

gulp.task("concatjs",function(){
	gulp.src([
		"dist/lib/angular.js",
		"dist/lib/angular-route.js",
		"dist/lib/jquery-1.8.3.min.js","dist/lib/bootstrap.js"])	
    .pipe(concat("lib.js"))
	.pipe(gulp.dest("dist/lib"))
})




gulp.task("default",["testless"]);

// 建立一个watch 任务
gulp.task("watch",function(){
	// 时时查看  less 文件 如果less 发生改变 执行  testless 命令
	
	gulp.watch("src/*.html",["minjs","myminjs","mincss","concatjs"])

})

