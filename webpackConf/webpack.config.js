const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	mode: 'production',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: '[name].[contenthash:10].js'
	},
	// loader解析规则
	resolveLoader: {
		modules: ['node_modules', resolve(__dirname, 'loader')]
		// alias: {
		// 	loaaa: resolve(__dirname, './loader/loader.js')
		// }
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'cloader',
					options: {
						data: '我是自定义loader的设置项'
					}
				}
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
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
		new HtmlWebpackPlugin({
			title: 'webpack 优化',
			template: './index.html',
			filename: 'index.html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true
			}
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'server',
			analyzerHost: '127.0.0.1',
			analyzerPort: '8866',
			reportFilename: 'report.html',
			defaultSizes: 'parsed'
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:10].css',
			chunkFilename: '[name]'
		}),
		new OptimizeCssAssetsPlugin()
	],
	devServer: {
		port: 3000,
		progress: true,
		contentBase: './dist',
		compress: true,
		open: true
	}
}
