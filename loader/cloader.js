// 主要就是loader-utils
// 通过loader-utils 的getOptions 方法获取到loader的配置项
// pitch 是预处理钩子
// schema-utils  用来校验getOptions的参数是否正确
'use strict'

// webpack内置的插件
const loaderUtils = require('loader-utils')

module.exports = function (content) {
	// 用来获取配置的信息(module.rules中的options)
	const options = loaderUtils.getOptions(this)
	// 处理好的字符串在返回出去
	return content + 'console.log(1212121);'
}

// loader的预处理函数
module.exports.pitch = function (r, pre, data) {
	data.value = '我是pitch'
}
