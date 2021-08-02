
//引入connect 用于连接UI组件和redux
import { connect} from 'react-redux'

//引入action
import {createIncrAction,
    createDecrAction,
    createIncrAsyncAction} from '../../redux/count_action'

import React, { Component } from 'react'

// ui 组件中不能见到store，不能见到action dispatch 
//定义UI组件
class index extends Component {

    //anfn 
    increament= (params) => {
        const {value} = this.selectNumber
        this.props.jia(value*1)

    }
    decreament= (params) => {
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }
    //奇数再加
    increamentIfOdd= (params) => {
        const {value} = this.selectNumber
        if(this.props.count %2 !==0){
            this.props.jia(value*1)
        }
    }
    //异步加
    increamentAsync= (params) => {
        const {value} = this.selectNumber 
        this.props.jianAsync(value*1,500)
    }

    render() {
        console.log('ui组件接收到的props是',this.props)
        return (
            <div>
                {/* store帮你调用了reducer 帮你拿到了初始值 这是第一个API*/}
                <h1>当前求和是：{this.props.count}</h1>
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


//本行代码作用：创建并暴露一个Count的容器组件
export default connect(
    state => ({count:state}),
    {
        jia : createIncrAction,
        jian :createDecrAction,
        jianAsync : createIncrAsyncAction
    }//这是mapDispatchToprops的简写，react-redux帮你做了dispatch。
    // mapDispatchToprops的一般写法
    // dispatch => (
    //     {
    //         jia :number=>dispatch(createIncrAction(number)), 
    //         jian :number=>dispatch(createDecrAction(number)),
    //         jianAsync :(number,time)=>dispatch(createIncrAsyncAction(number,time))
    //     }
    // )  
)(index)////ui组件写到右边