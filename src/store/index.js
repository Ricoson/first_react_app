import {createStore} from 'redux';
import  reducer  from './reducer'

// 创建一个store，就是一个数据公共存储仓库，需要与reducer结合
const store =createStore(
    reducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;