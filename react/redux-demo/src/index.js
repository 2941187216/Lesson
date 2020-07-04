import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import App from './App';
import { get } from 'axios'
import thunk  from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

// redux: action store reducer state
const counterReducer = function(state = { count: 1}, action) {
  // console.log(action);
  // return state;
  switch(action.type) {
    case 'COUNT_ADD':
      return {
        ...state, count: state.count + 1
      }
    case 'COUNT_REDUCE':
      return {
        ...state, count: state.count - 1
      }
    default:
      return state;
  }
} 

const postReducer = function(state = { list: [{title:'你好'}]}, action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      return {
        ...state, list: action.payload
      }
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  counter: counterReducer,
  post: postReducer
})
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk])),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) 
  // 创建store

console.log(store);
console.log(store.getState());

// 想要改变reducer中的值，需要使用dispatch派发一个action
// action里面有两个参数 type payload

store.dispatch({
  type: 'COUNT_ADD',
  payload: {}
})

store.dispatch({
  type: 'COUNT_REDUCE',
  payload: {}
})

console.log(store);
console.log(store.getState());

const getPostRequest = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
}

store.dispatch(async function(dispatch) {
  const res = await getPostRequest()
  console.log(res);
  dispatch({
    type: 'LOAD_POSTS',
    payload: res.data
  })
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
