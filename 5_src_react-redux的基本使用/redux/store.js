// 该文件专门用于暴露一个store对象，整个应用只有一个store对象。

//请出createStore ，专门用于创建redux中最为核心的store对象 
//import createStore from 'redux'
import { createStore ,applyMiddleware} from 'redux'

// 引入redux-thunk ，用于支持异步action
import thunk from 'redux-thunk'
//reducer 一般使用默认暴露
import countReducer from './count_reducer'

//向store注册reducer，暴露store
const store =  createStore(countReducer,applyMiddleware(thunk))
export default store