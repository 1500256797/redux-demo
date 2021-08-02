//引入Count的UI组件
import CountUI from '../../components/Count'
//引入connect 用于连接UI组件和redux
import { connect} from 'react-redux'

//引入action
import {createIncrAction,
    createDecrAction,
    createIncrAsyncAction} from '../../redux/count_action'

//mapStateToProps函数的返回的是一个对象；
//对象中的key就作为传递给UI组件props的key
//       value就作为传递给UI组件props的value
//mapStateToProps函数的目的就是为了把状态传过去
const mapStateToProps = (state) => {
    return {count:state}//react-redux 帮你调用的a函数,react-redux帮你
    //调用了store.getState,然后把返回值给了这个函数
}

//mapDispatchToProps函数的返回的对象中的key就作为传递给UI组件props的key
//                  value就作为传递给UI组件props的value
//mapDispatchToProps函数的目的就是为了把操作状态的方法
const mapDispatchToProps = (dispatch) => {  
    return {
        jia :number=>dispatch(createIncrAction(number)), 
        jian :number=>dispatch(createDecrAction(number)),
        jianAsync :(number,time)=>dispatch(createIncrAsyncAction(number,time))
    }
}
//本行代码作用：创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)////ui组件写到右边