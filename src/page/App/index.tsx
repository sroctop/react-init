import React, { Component } from 'react';
import './index.less';
import setRem from './../../config/index';

class App extends Component {

  componentDidMount() {
    setRem(); // 设置Rem
  }

  render() {
    return <div className="App">Init</div>;
  }
}

export default App;
