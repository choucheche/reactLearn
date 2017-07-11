import React from 'react';
import ReactDOM from 'react-dom';

export default class ComponentHeader extends React.Component{
/*
  创建一个类 ComponentHeader，它是继承于 React.Component 的子类
  类名必须大写
*/
  render(){
    return (
      <header>
        <h1>这里是头部</h1>
      </header>
    )
  }
}
