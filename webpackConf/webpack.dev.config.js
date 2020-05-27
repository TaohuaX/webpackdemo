const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		port: 3000,
		progress: true,
		contentBase: './dist',
		compress: true,
		open: true
	},
	module: {
		rules: [
			// {
			// 	test: /\.m?js$/,
			// 	exclude: /(node_modules|bower_components)/,
			// 	use: {
			// 		loader: 'cloader',
			// 		options: {
			// 			data: '我是自定义loader的设置项'
			// 		}
			// 	}
			// },
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
})
