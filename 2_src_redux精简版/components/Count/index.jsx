import React, { Component } from 'react'
// 引入store，用于从store 中获取状态
import store from '../../redux/store'

export default class index extends Component {

    // // 挂载后进行检测最好了
    // componentDidMount(){
    //     //监测redux 的状态变化，只要变化就调用render
    //     //第三个api 接收回调，只要store中任何一个状态改变就调用回调
    //     store.subscribe(()=>{
    //         //this.render() 自己去调render 不起作用
    //         this.setState({})
    //     })
    // }

    //anfn 
    increament= (params) => {
        const {value} = this.selectNumber
        //通知redux 加value
        //第二个APi:通知store 开始干活
        store.dispatch({type:'increament',data : value*1}) //redux 只是帮你管理下状态，不管你更新render

    }
    decreament= (params) => {
        const {value} = this.selectNumber
        store.dispatch({type:'decreament',data : value*1}) 

    }
    //奇数再加
    increamentIfOdd= (params) => {
        const {value} = this.selectNumber
        const count = store.getState()
        if(count%2!==0){
            store.dispatch({type:'increament',data : value*1}) 
        }

    }
    //异步加
    increamentAsync= (params) => {
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch({type:'increament',data : value*1}) 
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
