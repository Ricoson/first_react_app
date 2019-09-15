import { observable, isArrayLike } from 'mobx';
import React, { Component } from 'react'


class TodoItem extends Component {
    @observable kk=[];
    @observable array={}; 

    constructor(props) {
        super(props);
        // 使用observable对引用类型进行封装
        const arr = observable({ a: 1 })
        console.log(arr, Array.isArray(arr), isArrayLike(arr));
        // 使用observable.box对js基本类型进行封装
        let number = observable.box(20);
        let string = observable.box("kkk");
        // get()方法获取对应的原始值如number等于20
        console.log(number.get(), string.get());
    }
    render() {
        return (
            <div>

            </div>
        )
    }

}

export default TodoItem