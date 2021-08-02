import {ADD_PERSON} from '../constant'

const initState = [{id:'001',name:"Tom",age:18}]
//reducer 专门用作初始化状态和加工状态的。
export default function personReducer(preState = initState,action){
    const {type,data} = action

    switch (type) {
        case ADD_PERSON:
            return preState = [data,...preState]
        default:
            return preState
    }
}