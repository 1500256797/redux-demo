import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import store from './redux/store'//每个组件都要检测状态，干脆都放在入口文件里，一劳永逸
import {Provider} from 'react-redux'//provider组件会找到应用中所以的容器组件，然后把store传递给这些容器组件



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

//检测 redux中状态的改变，若redux中的状态发生了改变，
//那么重新渲染App组件
// store.subscribe(()=>{
//     //this.render() 自己去调render 不起作用
//     ReactDOM.render(<App/>,document.getElementById('root'))
// })// 这样做，效率会不会低？ 知识点：Dom Diffing 算法。所以不会影响大面积重排

//用上了react-redux 就不用自己监测redux了。原因是因为你的容器组件已经有了监测能力