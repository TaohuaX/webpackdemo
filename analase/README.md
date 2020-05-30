## webpack 的编译流程

1. ### compiler 是 webpack 的整体运行流程

   - compiler 上有一个 run 的方法--->开始构建
   - 创建 complation ---> 挂载资源文件 ---> 根据资源文件生成很多的 chunk (见 complier.js)
   - 使用 parser 从 chunk 里面获取解析 (使用 acorn 生成 AST 的树) ---> 通过模块(module)和一些依赖(dependent) 管理模块之间的关系
   - 使用 template 基于 complation 的数据生成代码

2. ### webpack 打包为什么比较慢
   - 主要是 loader 的处理(从 string 转换成 AST 在转换成 string, 如果 loader 比较多的话就会有比较慢)
   - 如果要是 entry 比较多的话也是非常慢的，并且没有办法解决

## webpack4.0 的问题

1. 在使用异步导入的时候,如果没有填写 chunkname 就会默认使用数字进行命名

   如：0， 1，2 这样的。如果前面的文件删除了，其他的序号也会跟着变，导致持久化缓存失效

   解决 1：使用魔法注释(只能解决文件不多的情况，如果文件比较多的时候就比较麻烦了)

   解决 2: name-all-modules-plugin 插件的使用

   ```javascript
   /*webpackChunkName: '文件的chunk名称'*/
   ```

## webpack5.0

- 直接就有一些缓存
- 多线程打包
- minSize/maxSize 可以分别设置 js 的大小及 css 的大小 (split code)

1. ### development enviroment
   - 在打包的时候默认将路径当成文件名
2. ### production enviroment
   - 按 chunkIds 命名
