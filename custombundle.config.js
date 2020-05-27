'use strict'

/******************* 生成语法书 *******************/
const babylon = require('babylon')
/******************* 遍历语法树 *******************/
const traverse = require('@babel/traverse').default
/******************* 字符串的操作 *******************/
const magicString = require('magic-string')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
const entryFilePath = './src/index.js'

let dep = []
function parse(filePath) {
	let altFileArr = []

	const file = fs.readFileSync(filePath, 'utf-8')
	const fileToString = new magicString(file)
	const ast = babylon.parse(file, {
		sourceType: 'module'
	})
	traverse(ast, {
		// 导入的文件处理
		ImportDeclaration({ node }) {
			const { start, end, specifiers, source } = node
			const getOriginFileImportFilePath = path.join('./src', `${source.value}`)
			console.log(getOriginFileImportFilePath)
			fileToString.overwrite(
				start,
				end,
				`var ${specifiers[0].local.name} = __webpack_require__('${getOriginFileImportFilePath}')`
			)
			altFileArr.push(getOriginFileImportFilePath)
		},
		// 导出文件处理
		ExportDeclaration({ node }) {
			const { start, end, declaration } = node
			fileToString.overwrite(start, end, `__webpack_exports__["default"] = ${declaration.name}`)
		}
	})
	dep.push({
		filename: `${filePath}`,
		_code: `${fileToString.toString()}`
	})
	return altFileArr
}
let filesKeys = parse(entryFilePath)
for (let item in filesKeys) {
	parse(filesKeys[item])
}
let template = `;(function (modules) {
	var installedModules = {}
	function __webpack_require__(moduleId) {
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports
		}
		var module = (installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		})
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
		module.l = true
		return module.exports
	}
	return __webpack_require__('${entryFilePath}')
})({
	<% for (let i = 0; i < dep.length; i++) {	%>
	'<%- dep[i].filename %>': function (module, __webpack_exports__, __webpack_require__) {
		<%- dep[i]['_code'] %>
	},
	<% } %>
})
`
const result = ejs.render(template, {
	dep
})
fs.writeFileSync('./custom-webpack.js', result)
