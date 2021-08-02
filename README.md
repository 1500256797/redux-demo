## 求和案例redux精简版笔记
1、去除Count组件自身的状态
2、src下建立相关文件夹
    -src
        -redux
            -store.js
            -count_reducer.js
3、store.js
    a、引入redux中的createStore函数，创建一个store
    b、createStore 调用时要传入一个为其服务的reducer
    c、记得暴漏store对象
4、count_reducer.js
    a、reducer的本质是一个函数，接收：preState,action,返回加工后的状态
    b、reducer有两个作用：初始化状态，加工状态
    c、reducer 被第一次调用，是store自动触发的，传递的preState是undefined
        传递的preState是 undefinded
        传递的action :{type :'@@REDUX/INIT_a.aaa.aa.xx'}
5、再index.js中检测store的状态的改变，一旦发生改变重新渲染<App/>
    备注：redux只负责管理状态，至于状态的改变驱动页面的展示，要靠我们自己写。

## 求和案例redux完整版
    新增文件：
        1、count_action.js 专门用于创建action对象
        2、constant.js 放置由于编码疏忽写错action中的type

## 求和案例redux 异步action
    1、明确：延迟的动作不想交给组件自身，想交给action
    2、何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
    3、具体编码：
        a、npm install redux-thunk,并配置到store中
        b、创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
        c、异步任务有结束后，dispatch分发一个同步的action去真正操作数据
    4、备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步的action.    
    action 有两种值，一种是object对象，一种是函数。
    异步action：function,不想把等的动作放到组件自身。例子：餐厅点餐，告诉waiter5分钟上菜

    同步action: Object{}

## 求和案例react-redux基本使用
    1、明确两个概念：
        a、ui组件，不能使用任何redux的api，只负责页面的呈现，交互等
        b、容器组件：负责和redux通信，将结果交给ui组件。
    2、如何创建一个容器组件---靠react-redux 的connect函数
        connect(mapStateToProps,mapDispatchToProps)(UI组件)
            - mapStateToProps：映射状态，返回值是一个对象
            - mapDispatchToProps ：映射操作状态的方法，返回值是一个对象
    3、备注，容器组件中的store是靠props传进去的，而不是在容器组件中直接引入 
    4、备注：mapDispatchToProps，也可以是一个对象  
    5、优化：  
        1、优化容器组件中的  mapDispatchToProps
        2、使用Provider给应用中所有的容器组件传递store，优化掉监测代码
        3、文件层面上的优化：把UI组件和容器组件合并成一个js文件 

## 求和案例react-redux优化
    1、容器组件和UI组件整合成一个文件
    2、无需自己给容器组件传递store，给<App/>组件包裹一个<Provider store={store}>即可
    3、使用了react-redux后再也不用自己监测redux中状态的改变了，容器组件可以自动完成这个动作
    4、mapDispatchToProps也可以简写成一个对象
    5、一个组件要和redux 打交道需要经过那几步？
        1、定义好UI组件--不暴露
        2、引入connect生成一个容器组件，并暴漏，写法如下
            connect(
                state=>({key:value}),//映射状态
                {key:xxxxAction}//映射操作状态的方法
            )(UI组件)
        3、在UI组件中通过this.props.xxxxx读取和操作状态
## 求和案例react-redux数据共享版
    1、定义一个Person组件，和Count组件通过redux共享数据
    2、为Person组件编写：reducer，action，配置constant常量
    3、重点：Person的reducer和Count的Reducer要使用combineReducers进行合并。合并成了一个普通对象
    4、交给store的是总reducer，最后注意在取出状态的时候要“取到位”

## 求和案例react-redux 开发者工具的使用
    1、npm start redux-devtools-extensions
    2、store中进行配置
        //引入redux devtool extens
        import { composeWithDevTools } from 'redux-devtools-extension'
        //引入redux 开发者工具，太好用了吧！！
        const store =  createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

## 求和案例react-redux 最终版
    1、所有变量名字要规范，尽量触发对象的简写形式
    2、reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer

## 项目打包
    1、使用npm run build 进行打包,执行后生成build文件夹   
    2、打包好的文件只能放到服务器上执行，要么放到node上，要么用server库
        npm  i serve -g//全局按照
        serve  dirname//启动服务器 serve build
## 技巧
！ +tab 快速生成html文档
在react中很少使用push，unshift进行数组数据的修改。容易有bug，而且这种也不是纯函数。
redux要求reducer是纯函数。也就是说：纯函数不能用push，unshift，不能发送网络请求，输入和输出设备，
不能调用date.now或者math.random等不纯的方法。

redux的reducer必须是个纯函数
