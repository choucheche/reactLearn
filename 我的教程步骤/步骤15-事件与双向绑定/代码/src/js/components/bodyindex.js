import React from 'react';
import ReactDOM from 'react-dom';

import BodyChild from './bodychild';
//引入子页面 BodyChild

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
      age2:30,
      age3:10,
      age4:5,
      age5:1,
    };
    /*
      这个 this.state 只会在 BodyIndex类里，不会影响到别的类
      在谷歌浏览器，React 插件里，可以看到 username:"Parry"
      只有在BodyIndex 这个类里才有
    */
  }

  changeUserInfo(){
  //写一个自定义函数
    this.setState({age3:50});
    //设置 age3的 state 为50
  };

  handleChildValueChange(event){
  /*
    写一个自定义函数，和子页面bodychild.js里的 BodyChild 里的
    一个 input onchange 绑定
  */
    this.setState({age4:event.target.value});
    //动态改变 age4的 state值
  };

  changeUserInfo2(num){
  //写一个自定义函数
    this.setState({age5:num});
    //设置 age5 为 传入的值
  };

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
        {/*调用了上面的 this.age，有倒计时，4秒后变成 30*/}
        <p>{this.state.username2} {this.state.age2}</p>
        {/*在上面 render()下，有倒计时，4秒后变成 dd 50*/}
        <p>这是index.js里的Index父组件传给子组件BodyIndex的userid：{this.props.userid}</p>
        {/*this.props和state不同，它可以在不同的组件之间传递值*/}
        <p>这是index.js里的Index父组件传给子组件BodyIndex的username：{this.props.username}</p>

        <br/><br/>

        <input type='button' value='提交，让age3变成50' onClick={this.changeUserInfo.bind(this)}/>
        {/*点击，执行上面的 changeUserInfo 函数,为了让 this 找到值，这里要加 .bind(this)*/}
        <p>这是age3：{this.state.age3}</p>

        <br/><br/>

        <div>这是bodychild.js里的 BodyChild类添加的</div>
        <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
        {/*
          因为上面引入了子页面 import BodyChild from './bodychild'; 的组件
          利用onChange={this.props.handleChildValueChange} 给它传入值
          它使用上面写的函数 handleChildValueChange 来改变 age4的 state
          这里的生成的 input 都是从子页面 bodychild.js 里的
          在handleChildValueChange函数里修改的值age4却是这个页面的值
        */}
        <p>这是age4：{this.state.age4}</p>

        <br/><br/>

        <input type='button' value='提交，通过传递参数让age5变成100' onClick={this.changeUserInfo2.bind(this,100)}/>
        {/*
          点击，执行 changeUserInfo2 函数,为了让this找到值，这里要加 .bind(this,100)
          100为传入changeUserInfo2函数的参数
        */}
        <p>这是age5：{this.state.age5}</p>
      </div>

    )
  }
}
