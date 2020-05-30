# webpack 学习

1.  ## webpack 源码分析

    - 单入口文件

2.  ## 自定义 loader

    - /loader 文件夹

3.  ## basic 处理

    [^_^]:<> (// TODO 获取 webpack 的参数)

    - yargs-parser
    - html-webpack-plugin
    - clean-webpack-plugin
    - copy-webpack-plugin
    - webpack-bundle-analyzer
    - webpack-dev-server

    [^_^]:<> (// TODO 分析哪个 loader/pulgin 时间长)

    - speed-measure-webpack-plugin

      [^_^]:<> (// TODO 打包时提示的插件)

    - webpack-build-notifier

    [^_^]:<> (// TODO 打包进度的插件)

    - progress-bar-webpack-plugin

    [^_^]:<> (// TODO 优化打包面板)

    - webpack-dashboard

    [^_^]: <> (// TODO 做持久化缓存)

    - webpack-manifest-plugin

    [^_^]:<> (// TODO 清除插件的某一些的依赖, 使自己手动安装)

    - webpack.IgnorePlugin

    [^_^]: <> (// TODO 暴露全局的 loader。如想把 jquery 挂载到 window 上。此 loader 为内联 loader,?后面是参数，将\$暴露出来)

    - expose-loader / webpack.ProvidePlugin

    ```javascript
    import jquery from 'exposee-loader?$!jquery'
    ```

    ```javascript
    // 此方法为在每一个模块中都注入
    new Webpack.ProvidePlugin({
    	$: 'jquery'
    })
    ```

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

    [^_^]: <> (// TODO 如果浏览器支持就不使用编译的，如果不支持在加载编译的；可以通过 script 的 type="module"/ nomodule 即可)

    [^_^]: <> (// TODO https://cdn.polyfill.io/v2/polyfill.min.js?features=Map,Set)


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

    4.  ### babel 及静态资源文件的缓存和持久化缓存

    5.  ### tree-shaking

        - css: purgecss-webpack-plugin

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

    10. ### cache-loader/thread-loader 的应用

    11. ### 在 optimization 中配置 runtimeChunk: {name: 'runtime'}

        - 打包后把 webpack 运行的代码打入到 main.js 中，如果使用了这个就会单独提取出来 runtime.js

    12. ### 在 module 中配置 noParse:/jquery/ 当包没有依赖项的时候可以将其忽略掉
