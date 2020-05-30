const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const DashboardPlugin = require('webpack-dashboard/plugin')
module.exports = smp.wrap(
	merge(baseConfig, {
		mode: 'development',
		devServer: {
			port: 3000,
			// progress: true,
			hot: true,
			compress: true,
			quiet: true
			// open: true
			// hot: true
		},
		module: {
			rules: [
				/******************* js文件处理 *******************/
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
				// {
				// 	test: /\.m?js$/,
				// 	exclude: /(node_modules|bower_components)/,
				// 	use: {
				// 		loader: 'eslint-loader',
				// 		options: {}
				// 	}
				// },
				/******************* js文件处理结束 *******************/
				{
					test: /\.(scss|sass)$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
		plugins: [
			new DashboardPlugin(),
			new ProgressBarPlugin(),
			new WebpackBuildNotifierPlugin({
				title: '学习优化',
				// logo: path.resolve("./img/favicon.png"),
				suppressSuccess: true
			}),
		],
		devtool: 'eval-cheap-module-source-map'
	})
)
