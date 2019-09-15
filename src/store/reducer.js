// stor仓库默认的数据
const defaultState ={
    inputVlaue:'123',
    list:[1,2,3]
}
const reducer =(state = defaultState,action )=>{
    // store中的会自动将state和action传给reducer
    // 注意：reducer 可以接受state,但是决不能修改state
    if(action.type==='change_input_value'){
        // 对state做个深拷贝
        const newState= JSON.parse(JSON.stringify(state))
        newState.inputVlaue = action.value
        // 把这个newState返回给store
        return newState
    }
    return state;
}
// state代表整个store仓库所有的数据
export default reducer
