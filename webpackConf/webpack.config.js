const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
	entry: resolve(__dirname, '../src', 'index.js'),
	output: {
		path: resolve(__dirname, '../', 'dist'),
		filename: 'js/[name].[hash:10].js'
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
		})
	]
}
