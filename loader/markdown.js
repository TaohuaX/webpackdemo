'use strict'
// 自己的marked
const marked = require('marked')

// webpack内置的插件
const loaderUtils = require('loader-utils')

module.exports = function (content) {
	// 用来获取配置的信息(module.rules中的options)
	const options = loaderUtils.getOptions(this)

	// webpack做的缓存
	this.cacheable()

	// 将配置文件传送给webpack
	marked.setOptions(options)

 // 处理好的字符串在返回出去
	return marked(content)
}
