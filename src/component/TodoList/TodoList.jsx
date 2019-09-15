import React, { Component, Fragment } from 'react'
import styles from './TodoList.css'
import TodoItem from './TodoItem'
import TodoMin from './TodoMin'
import axios from 'axios'
// 使用reducer
import store from '../../store'
class TodoList extends Component {
  constructor(props) {
    console.log("lishaoyong")
    super(props)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleInputChange=this.handleInputChange.bind(this)
    // this.deleteFatherClick = this.deleteFatherClick.bind(this)
    this.state = {
      list: [
        '苹果',
        '橘子',
        '香蕉'
      ],
      inputValue: '444'
    }
    

  }

    /**增加了store的内容
   * input值改变调用的函数
   * @param {*} e   
   */
  handleInputChang(e){
    // 定义store的actionCreate
    // 通过store提供的dispatch
    // const action={
    //   type:'change_input_value',
    //   value:e.target.value
    // }
    // store.dispatch(action)
    console.log(e.target.value);
    this.setState=({
      inputValue:e.target.value
    })
    console.log(this.state.inputValue)

  }
  
  /**
   *增加指定的TODO列表项
   */
  handleClick=()=> {
    console.log(this.state.inputValue)
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: '',
      }, () => {
        // 因为this.setState是异步执行，所以这个执行放在setState第二个参数  
        console.log(this.ul.querySelectorAll('div').length)
      });

    }
  }
  /**
   * 删除指定的TODO列表
   */
  deleteFatherClick=(index)=> {
    // 改变state的list的时候，而是拷贝出一个复本来处理
    const list = [...this.state.list, this.state.inputValue]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }



  /**
   * 根据上面store订阅
   * 只要reducer传给store的newState变化就会执行
   */
  storeChange(){ 
    console.log("加油");
        
  }

  /**
   * 将子组件map函数提出来优化代码
   */
  getTodoItem=()=> {
    return (
      this.state.list.map((item, index) => {
        return (
          <Fragment key={item}> 
            <TodoItem
              deleteFather={this.deleteFatherClick}
              content={item} index={index} 
            />
            {/* <TodoMin /> */}
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
    console.log("componentDidMount");
    axios.get('api/todolist/')
    .then(()=>{
      alert("请求成功")
    })
    .catch(()=>{
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


  // 当组件的state或者props发生改变的时候，render函数就会重新执行 
  // 在componentWillUpdate之后调用
  render() {
    console.log('render')
    return (
      // 因为最外层需要包裹一层，所以换成Fragment虚拟的元素
      <Fragment>
        <div className="todo" >
          {/*JSX的注释  */}
          {/* label元素的作用扩大点击区域 ，htmlFor点击后光标聚焦在input框中*/}
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" onChange={this.handleInputChange} />
          <button style={{ 'background': 'red' }} onClick={this.handleClick}>add</button>
          <ul ref={(ul) => { this.ul = ul }}>
            {this.getTodoItem()}
          </ul>
        </div>
      </Fragment>
    )
  }


}
export default TodoList