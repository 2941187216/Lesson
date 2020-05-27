import React from 'react';
import ReactDOM from 'react-dom';
// 数据管理模式
// 创建store 中央仓库 数据管理的架构
// createStore  comments 放到中央仓库里去
// 财务
import { createStore } from 'redux'; // 全家桶 三巨头 数据管理
import { Provider } from 'react-redux';
// commentApp comments 父组件，props，事件
// 数据就放到仓库，跟组件没有依赖关系
// 数据开发可以独立  UI组件更加纯粹
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
// 仓库  单一状态树
const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')

)