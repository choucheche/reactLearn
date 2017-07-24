import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';

import ReactMixin from 'react-mixin';
/*安装共享组件 cnpm install --save react-mixin@2，并导入*/
import MixinLog from './mixins';
/*加载 minins.js*/

const defaultProps = {
//设置默认值组，名为 defaultProps
	username: '这是一个默认的用户名'
};
/*设置默认的 username，当没有别的 username时，就用这个值*/

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
      age1:1,
      age2:2,
    };
    /*
      这个 this.state 只会在 BodyIndex类里，不会影响到别的类
      在谷歌浏览器，React 插件里，可以看到 username:"Parry"
      只有在BodyIndex 这个类里才有
    */
  }

  changeUserInfo(num){
  //写一个自定义函数
    this.setState({age1:num});
    //设置 age1 为 传入的值
    /*
      第一种方式
    */
    var mySubmitBotton = document.getElementById('submitButton');
    ReactDOM.findDOMNode(mySubmitBotton).style.color='red';
    /*将#submitButton颜色变成红色*/
  };

  changeUserInfo2(num){
  //写一个自定义函数
    this.setState({age2:num});
    //设置 age2 为 传入的值
    this.refs.submitButton2.style.color = 'blue';
    /*
      将 ref="submitButton2" 元素的颜色变为 blue
      注意：不要在 render内部调用 refs
      不要用太多 refs 方法，会卡
    */


    MixinLog.log();
    //调用 MixinLog组件里的 log()函数
  };

  render(){

    return (
      <div>
        <div id='submitButton'>age1：{this.state.age1}</div>
        <br/>
        <input type='button' value='提交，通过传递参数让age5变成100' onClick={this.changeUserInfo.bind(this,100)}/>
        <br/><br/>
        <div ref="submitButton2">age2：{this.state.age2}</div>
        <br/>
        <input type='button' value='提交，通过传递参数让age5变成100' onClick={this.changeUserInfo2.bind(this,100)}/>
      </div>

    )
  }
}

ReactMixin(BodyIndex.prototype,MixinLog);
/*让安装的插件 ReactMixin 在 BodyIndex组件里使用 MixinLog*/
