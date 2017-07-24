import React from 'react';
import ReactDOM from 'react-dom';

export default class ComponentHeader extends React.Component{
/*
  创建一个类 ComponentHeader，它是继承于 React.Component 的子类
  类名必须大写
*/



  render(){
    /*内联样式*/
    const styleComponentHeader = {
      header:{
        backgroundColor: "#333333",
        color: "#FFFFFF",
        "padding-top": "15px",
        paddingBottom: "15px"
      },
      //还可以定义其他的样式

    };
    /*内联样式 结束*/
    return (
      <header className="smallFontSize" style={styleComponentHeader.header}>
      {/*className引用class*/}
        <h1>这里是头部</h1>
      </header>
    )
  }
}
