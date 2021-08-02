import {INCREAMENT,DECREAMENT} from './constant'
// 该文件专门为Count组件生成action对象
export const  createIncrAction = data =>{
    // key 和value 重名 可以简写
    return {type: INCREAMENT ,data}
} 

export const createDecrAction = data =>( {type: DECREAMENT ,data})