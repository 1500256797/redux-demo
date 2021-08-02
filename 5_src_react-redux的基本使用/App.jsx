import React, { Component } from 'react'
//import Count from './components/Count' 删除ui组件
import Count from './container/Count'//引入容器组件
import store from './redux/store'
export default class App extends Component {
    render() {
        return (
            <div>
                App....
                {/* 给容器组件传递store */}
                <Count store={store}/>
            </div>
        )
    }
}
