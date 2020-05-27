// 主要就是loader-utils
// 通过loader-utils 的getOptions 方法获取到loader的配置项
// pitch 是预处理钩子
// schema-utils  用来校验getOptions的参数是否正确
'use strict'

/******************* webpack内置的插件 *******************/
const loaderUtils = require('loader-utils')
/******************* 生成语法书 *******************/
const acorn = require('acorn')
/******************* 遍历语法树 *******************/
const acornWalk = require('acorn-walk')
/******************* 字符串的操作 *******************/
const magicString = require('magic-string')
module.exports = function (content) {
	const ast = acorn.parse(content)
	const contentToString = new magicString(content)
	acornWalk.simple(ast, {
		VariableDeclaration(node) {
			const { start } = node
			contentToString.overwrite(start, start + 3, 'const')
		}
	})
	// 处理好的字符串在返回出去
	return contentToString.toString()
}

// loader的预处理函数
module.exports.pitch = function (r, pre, data) {
	data.value = '我是pitch'
}
