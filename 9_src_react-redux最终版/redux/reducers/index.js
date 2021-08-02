// 该文件用于汇总所有的reducer作为一个总的reducer。方便传给store
//import createStore from 'redux'
import { combineReducers} from 'redux'

//reducer 一般使用默认暴露
import count from './count'

import person from './person'

//合并reducer: combineReducers传入的对象就是redux中保存的总状态对象
//combineReducers传入的对象就是redux中保存的总状态对象
//combineReducers传入的对象就是redux中保存的总状态对象/
//combineReducers传入的对象就是redux中保存的总状态对象

//汇总所有的reducer变成一个总的reducer
export default combineReducers({
    count,
    person
})//key不是字符串
//向store注册reducer，暴露store