import React, { Component } from 'react';
import './index.less';
import setRem from './../../config/index';
import Foo from './../Foo';

class App extends Component {
  componentDidMount() {
    setRem(); // 设置Rem
  }

  render() {
    return (
      <div className="App">
        <Foo></Foo>
      </div>
    );
  }
}

export default App;
