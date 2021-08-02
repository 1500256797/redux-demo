import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
class index extends Component {
    addPerson =  (params) => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        //使用 nanoid 创建唯一id
        const personObj = {id:nanoid(),name,age}
        console.log(personObj)
        this.props.jiayiren(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <h4>上方组件求和为{this.props.he}</h4>
                <input ref={c=>this.nameNode = c}type="text" placeholder="请输入姓名"/>
                <input ref={c=>this.ageNode = c}type="text" placeholder="请输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.yiduirens.map(p=>{
                            return <li key={p.id}>{p.id}---{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    state => ({yiduirens:state.rens,he:state.he}),
    {
        jiayiren : createAddPersonAction
    }//这是mapDispatchToprops的简写，react-redux帮你做了dispatch。
)(index)////ui组件写到右边