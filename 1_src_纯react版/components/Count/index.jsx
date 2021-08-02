import React, { Component } from 'react'

export default class index extends Component {

    state = {count :0}

    //anfn 
    increament= (params) => {
        const {value} = this.selectNumber
        const {count} = this.state

        this.setState({count: count +value*1})
    }
    decreament= (params) => {
        const {value} = this.selectNumber
        const {count} = this.state

        this.setState({count: count  -value*1})
    }
    //奇数再加
    increamentIfOdd= (params) => {
        const {value} = this.selectNumber
        const {count} = this.state
        if(count%2!==0){
            this.setState({count: count +value*1})
        }

    }
    //异步加
    increamentAsync= (params) => {
        const {value} = this.selectNumber
        const {count} = this.state
        setTimeout(()=>{
            this.setState({count: count +value*1})
        },500)

        
    }

    render() {
        return (
            <div>
                <h1>当前求和是：{this.state.count}</h1>
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
