- react 小书
- react全家桶 = react  react-router redux
- 会给大家展示一个完整的react项目怎么做，下周实战简单的react开发

react = 数据 + UI

效果： 数据不需要派发的方式来做  父组件 -> 子组件
redux  任何组件可以随时跟 redux connect

搭建的时候 store -> provider -> app

connect(mapStateTopProps)()
reducer 可以有多个

1. 状态收归redux管理， 由reducer 函数提供
2. connect 借到组件去 state  单一状态树  state.