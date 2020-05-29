const { resolve } = require('path')
const webpack = require('webpack')
module.exports = {
	entry: {
		// 打包后的名称：哪个库
		jquery: ['jquery'],
		lodash: ['lodash']
	},
	output: {
		filename: '[name].js',
		path: resolve(__dirname, '../', 'dll/js'),
		library: '[name]' // 打包库里面向外暴露的名称
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]', // 映射库中的暴露名称
			path: resolve(__dirname, '../', 'dll/[name].manifest.json')
		})
	]
}
