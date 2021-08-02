import {INCREAMENT,DECREAMENT} from '../constant'
// import store from './store' --老版本

// 该文件专门为Count组件生成action对象
export const  createIncrAction = data =>{
    // key 和value 重名 可以简写
    return {type: INCREAMENT ,data}
} 
// 所谓同步action，就是说action的值为Object类型的一般对象
export const createDecrAction = data =>( {type: DECREAMENT ,data})

// 所谓异步action，就是说action的值为函数 --老版本
// export const createIncrAsyncAction = (data,time)=>{
//     return  ()=>{
//         setTimeout(()=>{
//             //联系store
//             store.dispatch(createIncrAction(data))
//         },time)
//     }//这个匿名函数交给了store。store不认函数，要把中间件请过来
// }


//异步action中，一般都会调用同步action、
//应用场景：不是必须要用的。一般偷懒些，可以在组件中搞异步请求
export const createIncrAsyncAction = (data,time)=>{
    return  (dispatch)=>{
        setTimeout(()=>{
            //联系store
            dispatch(createIncrAction(data))
        },time)
    }//这个匿名函数交给了store。store不认函数，要把中间件请过来
}