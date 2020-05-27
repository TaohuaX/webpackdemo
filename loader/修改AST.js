'use strict'

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
