;(function (modules) {
	function webpackJsonpCallback(data) {
		// data = [[0],{'./src/async.js':fun}]
		var chunkIds = data[0] // [0]
		var moreModules = data[1] // {'./src/async.js':fun}
		var moduleId,
			chunkId,
			i = 0,
			resolves = []
		for (; i < chunkIds.length; i++) {
			chunkId = chunkIds[i] // 0
			if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
				resolves.push(installedChunks[chunkId][0])
			}
			installedChunks[chunkId] = 0 // installedChunks = {‘0’:0}
		}
		for (moduleId in moreModules) {
			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
				modules[moduleId] = moreModules[moduleId]
			}
		}
		if (parentJsonpFunction) parentJsonpFunction(data)
		while (resolves.length) {
			resolves.shift()()
		}
	}

	var installedModules = {}

	var installedChunks = {
		main: 0
	}
	// 返回js文件的路径
	function jsonpScriptSrc(chunkId) {
		return __webpack_require__.p + '' + ({}[chunkId] || chunkId) + '.js'
	}
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
	__webpack_require__.e = function requireEnsure(chunkId) {
		// 0
		var promises = []
		var installedChunkData = installedChunks[chunkId]
		if (installedChunkData !== 0) {
			if (installedChunkData) {
				promises.push(installedChunkData[2])
			} else {
				var promise = new Promise(function (resolve, reject) {
					installedChunkData = installedChunks[chunkId] = [resolve, reject]
				})
				promises.push((installedChunkData[2] = promise)) // start chunk loading
				var script = document.createElement('script')
				script.charset = 'utf-8'
				script.timeout = 120
				script.src = jsonpScriptSrc(chunkId)
				document.head.appendChild(script)
			}
		}
		return Promise.all(promises)
	}
	// webpack公共的路径
	__webpack_require__.p = ''

	var jsonpArray = (window['webpackJsonp'] = window['webpackJsonp'] || [])
	// jsonpArray = [[[0],{'./src/async.js':fun}]]
	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray)
	jsonpArray.push = webpackJsonpCallback
	jsonpArray = jsonpArray.slice()
	for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i])
	var parentJsonpFunction = oldJsonpFunction // Load entry module and return exports

	return __webpack_require__((__webpack_require__.s = './src/index.js'))
})({
	'./src/index.js': function (module, exports, __webpack_require__) {
		__webpack_require__
			.e(0)
			.then(__webpack_require__.bind(null, './src/async.js'))
			.then(name => {
				console.log(name)
			})
		console.log('weboack初始化')
	}
})
