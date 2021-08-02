// 该文件是专门为了Count组件服务的reducer，reducer的本质就是一个函数。
// reducer 函数会接到2个参数，分别是之前的状态（preState），动作对象（action）
import {INCREAMENT,DECREAMENT} from '../constant'
const initState = 99
//形参的默认值，如果没有传prestate,或者preState是undefined 

export default function countReducer(preState = initState,action){
    console.log(preState,action)
    //if(preState === undefined) preState = 0 
    const {type,data} = action

    //从action对象中获取type，data，并根据type 决定如何加工数据
    switch (type) {
        case INCREAMENT://如果是加
            return preState + data
        case DECREAMENT://如果是减
            return preState - data
        default:
            return preState;
    }
}