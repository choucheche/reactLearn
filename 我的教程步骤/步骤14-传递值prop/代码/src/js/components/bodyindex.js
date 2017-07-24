import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyIndex extends React.Component{
/*
  创建一个类 BodyIndex，它是继承于 React.Component 的子类
  类名必须大写
*/
  constructor(){
  //state想要初始化的话，需要有一个构造函数 constructor()
    super();
    //调用基类的所有的初始化方法，比如 state
    this.state = {
      username:'Parry',
      age:20,
      username2:'cc',
      age2:30
    };
    /*
      这个 this.state 只会在 BodyIndex类里，不会影响到别的类
      在谷歌浏览器，React 插件里，可以看到 username:"Parry"
      只有在BodyIndex 这个类里才有
    */
  }

  render(){

    setTimeout(()=>{
      this.setState({age:30,username2:'dd'});
      /*
        this.setState 修改了 this.state.age的值为30
        修改了 this.state.username2的值为 dd
      */
      this.setState({age2:50});
    },4000);


    return (
      <div>
        <h2>这里是页面的主题内容</h2>
        <p>{this.state.username}</p>
        {/*调用了上面的 this.state */}
        <p>{this.state.age}</p>
        {/*调用了上面的 this.age */}
        <p>{this.state.username2} {this.state.age2}</p>
        <p>这是index.js里的Index父组件传给子组件BodyIndex的userid：{this.props.userid}</p>
        {/*this.props和state不同，它可以在不同的组件之间传递值*/}
        <p>这是index.js里的Index父组件传给子组件BodyIndex的username：{this.props.username}</p>
      </div>

    )
  }
}
