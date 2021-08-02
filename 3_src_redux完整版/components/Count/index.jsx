import React, { Component } from 'react'
// 引入store，用于从store 中获取状态
import store from '../../redux/store'

// 引入action_creator，专门用于创建action对象 我就不自己写了
import {createIncrAction,createDecrAction} from '../../redux/count_action'
export default class index extends Component {



    //anfn 
    increament= (params) => {
        const {value} = this.selectNumber
        //通知redux 加value
        //第二个APi:通知store 开始干活
        store.dispatch(createIncrAction(value*1)) //redux 只是帮你管理下状态，不管你更新render

    }
    decreament= (params) => {
        const {value} = this.selectNumber
        store.dispatch(createDecrAction(value*1)) 

    }
    //奇数再加
    increamentIfOdd= (params) => {
        const {value} = this.selectNumber
        const count = store.getState()
        if(count%2!==0){
            store.dispatch(createIncrAction(value*1)) 
        }

    }
    //异步加
    increamentAsync= (params) => {
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch(createIncrAction(value*1)) 
        },500)

        
    }

    render() {
        return (
            <div>
                {/* store帮你调用了reducer 帮你拿到了初始值 这是第一个API*/}
                <h1>当前求和是：{store.getState()}</h1>
                <select ref={c=>this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increament}>+</button>&nbsp;
                <button onClick={this.decreament}>-</button>&nbsp;
                <button onClick={this.increamentIfOdd}>当前求和是奇数再加</button>&nbsp;
                <button onClick={this.increamentAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
