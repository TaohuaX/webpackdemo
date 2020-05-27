const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	// entry: { index: resolve(__dirname, '../src', 'index.js') },
	output: {
		path: resolve(__dirname, '../', 'dist'),
		filename: '[name].[contenthash:10].js'
	},
	// loader解析规则
	resolveLoader: {
		modules: ['node_modules', resolve(__dirname, 'loader')]
		// alias: {
		// 	loaaa: resolve(__dirname, './loader/loader.js')
		// }
	},
	module: {},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack 优化',
			template: resolve(__dirname, '../index.html'),
			filename: 'index.html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true
			}
		})
	]
}
