'use strict'
/******************* webpack内置的插件 *******************/
const loaderUtils = require('loader-utils')
/******************* 生成语法书 *******************/
const babylon = require('babylon')
/******************* 遍历语法树 *******************/
const traverse = require('@babel/traverse')
/******************* 字符串的操作 *******************/
const magicString = require('magic-string')
module.exports = function (content) {
	const ast = babylon.parse(content, {
		sourceType: 'module'
	})
	const contentToString = new magicString(content)
  console.log(ast)
  traverse(ast, {})
	// acornWalk.simple(ast, {
	// 	VariableDeclaration(node) {
	// 		const { start } = node
	// 		contentToString.overwrite(start, start + 3, 'const')
	// 	}
	// })
	// 处理好的字符串在返回出去
	return contentToString.toString()
}
