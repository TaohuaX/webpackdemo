import _ from 'lodash'
import $ from 'jquery'
import './common/main.scss'
import { add } from './js/add.js'
console.log('主文件加载了')
console.log(add(1, 6))

/******************* 开启js的HMR *******************/
if (module.hot) {
	module.hot.accept('./js/add.js', () => {
		console.log(add(1, 6))
	})
}

/******************* 注册serviceworker *******************/
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then(registration => {
				console.log('SW registered: ', registration)
			})
			.catch(registrationError => {
				console.log('SW registration failed: ', registrationError)
			})
	})
}
