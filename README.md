# webpack 学习

1.  ## webpack 源码分析

    - 单入口文件

2.  ## 自定义 loader

    - /loader 文件夹

3.  ## basic 处理

    - html-webpack-plugin
    - clean-webpack-plugin
    - copy-webpack-plugin
    - webpack-bundle-analyzer
    - webpack-dev-server

4.  ## css 处理

    - sass-loader
    - postcss-loader / postcss-preset-env
    - css-loader
    - style-loader
    - mini-css-extract-plugin
    - optimize-css-assets-webpack-plugin

5.  ## 图片处理及其他文件处理

    - url-loader
    - html-loader
    - file-loader

6.  ## js 处理

    - eslint-loader
    - babel-loader
    - core-js

7.  ## 优化处理

    1.  ### HMR 开启 hot: true

        - 样式文件支持(style-loader 处理的)
        - js 文件不支持，需要加入相关代码(非入口文件)

        ```javascript
        if (module.hot) {
        	module.hot.accept('./js/add.js', () => {
        		console.log(add(1, 6))
        	})
        }
        ```

    2.  ### source map 的正确使用

    3.  ### oneOf 的正确使用

    4.  ### babel 及静态资源文件的缓存

    5.  ### tree-shaking

    6.  ### code-split

    7.  ### 懒加载及预加载

    8.  ### PWA

        ```javascript
        // webpack配置文件中
        const { GenerateSW } = require('workbox-webpack-plugin')
        new GenerateSW({
        	clientsClaim: true, // 帮助serviceworker快速启动
        	skipWaiting: true // 删除旧的serviceworker
        })
        // 入口文件注册
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
        ```

    9.  ### dll 动态链接库
        - 新建 dll 的配置文件
        - webpack 配置文件中配置哪些库不用打包
        - 使用 add-asset-html-webpack-plugin 将文件动态插入到 html 中
