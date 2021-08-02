import {ADD_PERSON} from '../constant'

const initState = [{id:'001',name:"Tom",age:18}]
//reducer 专门用作初始化状态和加工状态的。
export default function personReducer(preState = initState,action){
    const {type,data} = action

    switch (type) {
        case ADD_PERSON:
            //这里返回的是数组的地址 react-redux 进行了浅比较
            //preState.unshift(data) 不能这样写，这样写就不是纯函数了。redux要求reducer必须是纯函数
            return preState = [data,...preState]
        default:
            return preState
    }
}