- 没有使用create-react-app react 开发的脚手架
  从 0 开发构建一个react 项目 webpack 开发打包工具

  react 开发流程  webpack  ts react + react-router  redux

  1. webpack 开发流程工具
  2. webpack-cli commend line 开发工具的命令行工具
  3. webpack-dev-server 某个端口启动应用

- scripts webpack-dev-server  3000 运行dev 项目

- typescript tsconfig.json 根目录下的ts 配置

- @babel/core  es6 -> es5
  .babelrc  处理js

- bootstrap 

1. src 未来是我们的开发目录，业务代码在这里
   index.ts entry 入口文件
   index.html 模板？
   webpack.config.js 来负责 webpack-dev-server --open
2. .ts typescript awsome-typescript-loader  tsconfig.json
   .ts -> .js
3. @babel/cli @babel/core @babel/preset-env 

搭建完开发流程

react react-dom
@types/react @types/react-dom  ts + react  @babel/core

- yarn add  webpack-dev-server --save-dev
- 