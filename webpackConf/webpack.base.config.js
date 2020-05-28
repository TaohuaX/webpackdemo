const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log('==========' + resolve(__dirname, '../src', 'index.js'))

module.exports = {
	entry: resolve(__dirname, '../src', 'index.js'),
	output: {
		path: resolve(__dirname, '../', 'dist'),
		filename: 'js/[name].[contenthash:10].js'
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
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack 优化',
			template: resolve(__dirname, '../', 'index.html'),
			filename: 'index.html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true
			}
		})
	]
}
