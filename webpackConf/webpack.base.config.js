const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
module.exports = {
	entry: resolve(__dirname, '../src', 'index.js'),
	output: {
		path: resolve(__dirname, '../', 'dist'),
		filename: 'js/[name].[hash:10].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': resolve(__dirname, '../', 'src')
		}
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
				oneOf: [
					{
						test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
						loader: 'url-loader',
						options: {
							limit: 8 * 1024, // 小于8kb 用base64处理
							name: 'images/[name].[contenthash:10].[ext]'
						}
					},
					{
						test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
						loader: 'file-loader',
						options: {
							name: 'font/[name].[contenthash:10].[ext]'
						}
					},
					{
						test: /\.html$/,
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack 优化',
			template: resolve(__dirname, '../', 'index.html'),
			filename: 'index.html',
			minify: {
				removeAttributeQuotes: true,
				removeComments: true,
				collapseWhitespace: true
			}
		}),
		// 告诉webpack哪些库不需要打包
		new webpack.DllReferencePlugin({
			manifest: resolve(__dirname, '../', 'dll/jquery.manifest.json')
		}),
		new webpack.DllReferencePlugin({
			manifest: resolve(__dirname, '../', 'dll/lodash.manifest.json')
		}),
		// 将某个文件打包出去并且在html中引入
		new AddAssetHtmlWebpackPlugin({
			filepath: resolve(__dirname, '../', 'dll/js/jquery.js')
		}),
		new AddAssetHtmlWebpackPlugin({
			filepath: resolve(__dirname, '../', 'dll/js/lodash.js')
		})
	]
}
