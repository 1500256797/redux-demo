import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import store from './redux/store'//每个组件都要检测状态，干脆都放在入口文件里，一劳永逸
import {Provider} from 'react-redux'//provider组件会找到应用中所以的容器组件，然后把store传递给这些容器组件



ReactDOM.render(
    // 此处是用provider包裹，为了给所有的容器组件添加store
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
