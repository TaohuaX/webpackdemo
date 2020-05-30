const {
	// 同步串行   不关心返回值
	SyncHook,
	// 同步串行   如果返回值不为null   就省略后面的函数  （为null在执行）
	SyncBailHook,
	// 同步串行   可以拿到前面函数的返回值
	SyncWaterfallHook,
	// 同步串行   返回true的话继续执行
	SyncLoopHook,
	// 异步 并行   不关心返回值
	AsyncParallelHook,
	// 异步 并行   如果返回值不为null   就省略后面的函数
	AsyncParallelBailHook,
	// 异步串行   不关心返回值
	AsyncSeriesHook,
	// 异步串行  如果返回值不为null   就继续执行      （不为null在执行）
	AsyncSeriesBailHook,
	// 异步串行   可以拿到前面函数的返回值
	AsyncSeriesWaterfallHook
} = require('tapable')
