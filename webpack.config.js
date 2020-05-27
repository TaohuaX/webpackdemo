const { resolve } = require('path')
module.exports = {
	mode: 'development',
	module: {
		// rules: [
		// 	{
		// 		test: /\.m?js$/,
		// 		exclude: /(node_modules|bower_components)/,
		// 		use: {
		// 			loader: resolve(__dirname, 'loader/AST.js'),
		// 			options: {
		// 				data: '我是自定义loader的设置项'
		// 			}
		// 		}
		// 	}
		// ]
	}
}
