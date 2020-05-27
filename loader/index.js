'use strict'

// webpack内置的插件
const loaderUtils = require('loader-utils')

module.exports = function (content) {
  console.log('content====' + content)
	// 用来获取配置的信息(module.rules中的options)
	const options = loaderUtils.getOptions(this)
	console.log(options.data)
	console.log(this.data)
	// 处理好的字符串在返回出去
	return content + 'console.log(1212121);'
}

// loader的预处理函数
module.exports.pitch = function (r, pre, data) {
	data.value = '我是pitch'
}
