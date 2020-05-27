;(function (modules) {
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
	return __webpack_require__('./src/index.js')
})({
	
	'./src/index.js': function (module, __webpack_exports__, __webpack_require__) {
		var name = __webpack_require__('src/sync.js')
console.log(name)

	},
	
	'src/sync.js': function (module, __webpack_exports__, __webpack_require__) {
		const test = 'sync'
__webpack_exports__["default"] = test
	},
	
})
