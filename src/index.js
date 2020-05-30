/******************* 练习使用开始 *******************/
// import _ from 'lodash'
// import $ from 'jquery'
// import './common/main.scss'
// import { add } from './js/add.js'
// console.log('主文件加载了')
// console.log(add(1, 6))

// /******************* 开启js的HMR *******************/
// if (module.hot) {
// 	module.hot.accept('./js/add.js', () => {
// 		console.log(add(1, 6))
// 	})
// }

// /******************* 注册serviceworker *******************/
// if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', () => {
// 		navigator.serviceWorker
// 			.register('/service-worker.js')
// 			.then(registration => {
// 				console.log('SW registered: ', registration)
// 			})
// 			.catch(registrationError => {
// 				console.log('SW registration failed: ', registrationError)
// 			})
// 	})
// }
/******************* 练习使用结束 *******************/

/************* 分析源码开始 yarn build 及使用webpack.config.js *******************/
import('./async')
	.then(() => {
		console.log('文件加载成功')
	})
	.catch(e => {
		console.log('文件加载失败')
	})
/******************* 分析源码结束 *******************/
