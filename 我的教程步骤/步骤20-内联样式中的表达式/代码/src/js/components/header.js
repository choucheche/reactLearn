import React from 'react';
import ReactDOM from 'react-dom';

export default class ComponentHeader extends React.Component{
/*
  创建一个类 ComponentHeader，它是继承于 React.Component 的子类
  类名必须大写
*/
  constructor(){
  //state想要初始化的话，需要有一个构造函数 constructor()
    super();
    //调用基类的所有的初始化方法，比如 state
    this.state = {
      miniHeader: false
      //miniHeader变量 默认为 false
    }
  };
  switchHeader(){
    this.setState({
      miniHeader: !this.state.miniHeader
    })
  };
  //每当用户点击时，切换 true/false 状态

  render(){
    /*内联样式*/
    const styleComponentHeader = {
      header:{
        backgroundColor: "#333333",
        color: "#FFFFFF",
        "padding-top": (this.state.miniHeader) ? "3px" : "15px",
        paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
        //判断变量状态，选择相应的值
      },
      //还可以定义其他的样式

    };
    /*内联样式 结束*/
    return (
      <header className="smallFontSize" style={styleComponentHeader.header} onClick={this.switchHeader.bind(this)}>
      {/*
        className引用class
        onClick={this.switchHeader.bind(this)
        点击触发 switchHeader 函数
      */}
        <h1>这里是头部</h1>
      </header>
    )
  }
}
