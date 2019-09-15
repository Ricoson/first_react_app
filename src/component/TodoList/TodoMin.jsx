import React, { Component } from 'react'

class TodoMin extends Component {
    // 当父组件的Render函数被运行时，它的子组件的render都会被重新运行一次
    render (){
        console.log("minRender")
        return (
            <div >我是min</div>
        )
    }
}
export default TodoMin
