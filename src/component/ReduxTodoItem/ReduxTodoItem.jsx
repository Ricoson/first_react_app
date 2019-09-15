import React, { Component } from 'react'
import propTypes from 'prop-types'


class TodoItem extends Component {
    constructor(props) {
        super(props);
        // react底层的东西，提高性能
        this.deleteClick = this.deleteClick.bind(this)
    }

    /**
   * 删除指定的TODO列表
   */
    deleteClick() {
        const { index } = this.props;
        this.props.deleteFather(index);
    }

    // 一个组件要从父组件接受参数
    // 只要父组件的render函数被‘重新’执行了,子组件的这个生命周期就会被执行
    // 如果这个组件第一次存在于父组件中了，不会被执行
    // 如果这个组件之前已经存在于父组件中，就会被执行
    componentWillReceiveProps() {

    }

    // 当组件在页面中销毁之前调用的函数
    // shouldComponentUpdate 为false组件也销毁不了    
    componentWillUnmount() {
        console.log("销毁")
    }

    // shouldCoponentUpdate避免子组件没有数据没有更新的状态执行重新渲染
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false
        }
    }
    render() {
        console.log("儿子")
        // es6对象解构赋值
        const { content } = this.props;
        const { test } = this.props;
        return (
            // dangerouslySetInnerHTM   L html不转义的设置
            <div
                onClick={this.deleteClick}
                dangerouslySetInnerHTML={{ __html: content }}
            >
            </div>
        )
    }
}
// 对父组件传过来的值做类型校验
TodoItem.propTypes = {
    // test父组件没有传入，就不会进入校验的过程。加入isRequired表示必传值
    test: propTypes.string.isRequired,
    content: propTypes.string,
    deleteFather: propTypes.func,
    index: propTypes.number,
}
TodoItem.defaultProps = {
    test: 'helloWord'
}
export default TodoItem

