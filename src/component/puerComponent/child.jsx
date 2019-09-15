import React, { PureComponent,Component } from 'react';

class IndexPage extends PureComponent{
  constructor() {
    super();
    this.state = {
      isShow: false,
      object:{kk:'kk',bb:'bb',aa:'aa'}
    };
    console.log('constructor');
  }

  changeState = () => {
    this.setState({
      isShow: true
    })
  };

  rightLeave=()=>{
      let objctCopy= this.state.object
    //   objctCopy={kk:'kk',WW:'ww'}
      this.setState({
        objctCopy:objctCopy,
        isShow:false
      })
  }

  render() {
   alert('render');
    return (
      <div>
        <button onClick={this.changeState}   onMouseLeave={this.rightLeave}>点击</button>
        <div>{this.state.isShow.toString()}</div>
      </div>
    );
  }
}

export default IndexPage