import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import store from './redux/store'//每个组件都要检测状态，干脆都放在入口文件里，一劳永逸

ReactDOM.render(<App/>,document.getElementById('root'))

store.subscribe(()=>{
    //this.render() 自己去调render 不起作用
    ReactDOM.render(<App/>,document.getElementById('root'))
})// 这样做，效率会不会低？ 知识点：Dom Diffing 算法。所以不会影响大面积重排