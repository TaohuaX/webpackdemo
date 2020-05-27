// 入口只是输出  console.log('weboack初始化')
// 打包后简化代码
;(function (modules) {
	var installedModules = {}
	function __webpack_require__(moduleId) {
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports
		}

		var module = (installedModules[moduleId] = {
			exports: {}
		})
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
		return module.exports
	}
	return __webpack_require__('./src/index.js')
})({
	'./src/index.js': function (module, exports) {
		console.log('weboack初始化')
	}
})
