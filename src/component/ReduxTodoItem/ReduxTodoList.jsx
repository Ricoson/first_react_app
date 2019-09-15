import React, { Component, Fragment } from 'react'
import ReduxTodoItem from './ReduxTodoItem'
import axios from 'axios'
import { Input, Button, List } from 'antd';
import { CSSTransition } from 'react-transition-group';

import 'antd/dist/antd.css'
import './ReduxTodoList.css'
// 使用reducer
import store from '../../store'
class ReduxTodoList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.deleteFatherClick = this.deleteFatherClick.bind(this)
        this.deleteFatherClick = this.deleteFatherClick.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.handleToggole = this.handleToggole.bind(this)
        // state的初始化
        this.state = {
            show: 'show'
        }
        // 获取store的数据，根据store提供的getState()方法
        this.storeState = store.getState()
        console.log(this.storeState)
        // 由reducer传到store的newState后，组件订阅store只要变化让执行一个函数
        store.subscribe(this.storeChange)
    }

    /**
     *增加指定的TODO列表项
     */
    handleClick() {
    }
    
    /**
     * 删除指定的TODO列表
     */
    deleteFatherClick(index) {

    }

    /**增加了store的内容
     * input值改变调用的函数
     * @param {*} e 
     */
    handleInputChange(e) {
        // 定义store的actionCreate
        // 通过store提供的dispatch
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)

    }

    /**
     * 根据上面store订阅
     * 只要reducer传给store的newState变化就会执行
     */
    // issue是storeChange(){}这里的使用this.setState(store.getState)
    storeChange = () => {
        console.log("加油");
        this.setState(store.getState());
    }

    /**
     * 将子组件map函数提出来优化代码
     */
    getTodoItem() {
        console.log("hello")
        return (
            this.state.list.map((item, index) => {
                return (
                    <Fragment key={item}>
                        <ReduxTodoItem />
                    </Fragment>
                )
            })
        )
    }
    // 在组件即将被挂载到页面的时刻自动执行函数
    componentWillMount() {
        console.log('componentWillMount')
    }

    // 页面被挂载之后执行的函数,在render执行后执行
    componentDidMount() {
        axios.get('api/todolist')
            .then((res) => {
                alert("请求成功")
                console.log(res)
            })
            .catch(() => {
                alert('请求失败')
            })
    }

    // 组件被更新之前，它会自动被执行，
    // 它会返回一个boolean来决定组件之后是否更新组件
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    //  组件被更新之前，它会自动被执行,在shouldComponent之后执行
    // 它的执行取决于shouldComponentUpdate返回的true或fasle
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    // 组件更新完成之后，它自动执行。在render后面执行
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    // 动画改变得按钮
    handleToggole() {
        this.setState({
            show: this.state.show ? false : true
        })
    }

    // 当组件的state或者props发生改变的时候，render函数就会重新执行 
    // 在componentWillUpdate之后调用
    render() {
        console.log('render')
        return (
            // 因为最外层需要包裹一层，所以换成Fragment虚拟的元素
            <Fragment>
                {/* 这个in感知是出场动画还是入场动画 
                    
                */}
                <CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames='my-node'
                >
                    <div>hello</div>
                    {/* 简单动画调试 */}
                    {/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
                    <button onClick={this.handleToggole}>toggle</button>
                </CSSTransition>

                {/* <Inputtg
                    style={{ width: '200px', marginTop: '20px', marginLeft: '20px' }}
                    onChange={this.handleInputChange} ></Input>
                <Button
                    style={{ marginTop: '20px', marginLeft: '20px' }}
                    type="primary"
                    onClick={this.handleClick}
                >发送</Button>
                <List
                    size="large"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.storeState.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                /> */}
            </Fragment >

        )
    }


}
export default ReduxTodoList