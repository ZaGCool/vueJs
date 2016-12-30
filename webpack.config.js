/*一、安装  webpack 与准备项目
第一步 sudo npm install webpack --global
webpack --help
webpack hello
cd ~/desktop
mkdir course-webpack
cd ninghao-webpack
第二步 npm init
ls
第三步sudo npm install webpack --save-dev

二、打包
webpack entry.js bundle.js

三、使用 loader 转换文件
pwd
npm install css-loader style-loader --save-dev

四、配置文件：webpack.config.js
创建webpack.config.js
webpack entry.js bundle.js

五、使用 source-map
第一次查看chrome source
webpack --devtool source-map
第二次查看chrome source*/

//webpack       webpack watch??

//1启动服务  2模块化开发   3编译css(不是最佳范式)  
//4安装es6的模块  babel-core babel-presets-es2015 babel-loader  --save-dev
//loader:'babel',    ///  loader:'babel-loader?presets[]=es2015'
/*query:{
	presets:['es2015']
}*/

//解析sass   分离css  extract-text-webpack-plugin

//打包  压缩
// webpack-dev-server  --inline --hot 模块热替换
//npm run build package.json 配置运行脚本

// mock数据的    json server 全局安装

// es6       // npm cache clear 清除缓存

//fekit  es6 webpack  移动端页面布局 flexbox yo框架  git版本控制工具  vue  react

var webpack = require('webpack');
var et = require('extract-text-webpack-plugin');

module.exports={
	entry:"./src/entry.js",//__dirname+"/entry.js"
	output:{
		path:__dirname+"/prd", //输入到当前文件夹
		filename:"bundle.js"
		//filename:"[name]-[hash].js",
	},

	devtool:"source-map",
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style!css',
			},
			{
				test:/\.js$/,
				loader:"babel"
				//loader:"babel?presets[]=es2015"
			},
			{
				test:/\.scss$/,
				//loader:"style!css!sass"
				loader:et.extract('style',"css!sass")//并行  串行
			},
			{
				test:/\.string$/,
				loader:"string"
			}

		]
	},
	devServer:{
		contentBase:__dirname+"/prd/",
		port:8000,
		host:"localhost",
		inline:true,
		proxy:{
			"/api":{
				target:"http://localhost:3000/",
				pathRewrite:{
					'^/api':''
				}
			}
		}
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
        new et('bundle.css')
    ]
}