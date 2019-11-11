// parent.js
import React, { Component } from 'react';
import Child from './child';

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      title: 'title'
    };

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    let title = Math.random();
    this.setState({
      title: title
    });
  }

  render() {
    return (
      <div>
        <h3>Container</h3>
        <button type="button" onClick={this.changeState}>change</button>
        <Child title={this.state.title}></Child>
      </div>
    );
  }

  componentWillUpdate() {
    console.log('parent will update');
  }
}

export default Parent;