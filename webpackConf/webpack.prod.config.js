const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = merge(baseConfig, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'usage',
									corejs: {
										version: 3
									},
									targets: {
										chrome: 60,
										firefox: 60,
										ie: 9,
										safari: 10,
										edge: 17
									}
								}
							]
						],
						cacheDirectory: true
					}
				}
			},
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
		new OptimizeCssAssetsPlugin(),
		new GenerateSW({
			clientsClaim: true, // 帮助serviceworker快速启动
			skipWaiting: true // 删除旧的serviceworker
		}),
		new ManifestPlugin()
	],
	// node_modules单独打包
	// 有公用的包不会多次引入
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	devtool: 'nosource-source-map'
})
