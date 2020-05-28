const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
	mode: 'production',
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
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							// 帮助postcss 找到browserslist
							plugins: () => [require('postcss-preset-env')()]
						}
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		// new BundleAnalyzerPlugin({
		// 	analyzerMode: 'server',
		// 	analyzerHost: '127.0.0.1',
		// 	analyzerPort: '8866',
		// 	reportFilename: 'report.html',
		// 	defaultSizes: 'parsed'
		// }),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:10].css',
			chunkFilename: '[name]'
		}),
		new OptimizeCssAssetsPlugin()
	],
	devtool: 'nosource-source-map'
})
