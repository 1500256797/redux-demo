// 该文件专门用于暴露一个store对象，整个应用只有一个store对象。

//请出createStore ，专门用于创建redux中最为核心的store对象 
//import createStore from 'redux'
import { createStore ,applyMiddleware,combineReducers} from 'redux'

// 引入redux-thunk ，用于支持异步action
import thunk from 'redux-thunk'


//引入redux devtool extens
import { composeWithDevTools } from 'redux-devtools-extension'
//reducer 一般使用默认暴露
import countReducer from './reducers/count'

import personReducer from './reducers/person'

//合并reducer: combineReducers传入的对象就是redux中保存的总状态对象
//combineReducers传入的对象就是redux中保存的总状态对象
//combineReducers传入的对象就是redux中保存的总状态对象/
//combineReducers传入的对象就是redux中保存的总状态对象

//汇总所有的reducer变成一个总的reducer
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})//key不是字符串
//向store注册reducer，暴露store

//引入redux 开发者工具，太好用了吧！！
const store =  createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store