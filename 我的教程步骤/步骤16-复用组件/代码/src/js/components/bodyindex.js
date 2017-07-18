import React from 'react';
import ReactDOM from 'react-dom';

import BodyChild from './bodychild';
//隐入子页面 BodyChild

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
        {/*调用了上面的 this.age */}
        <p>{this.state.username2} {this.state.age2}</p>
        <p>这是index.js里的Index父组件传给子组件BodyIndex的userid：{this.props.userid}</p>
        {/*this.props和state不同，它可以在不同的组件之间传递值*/}
        <p>这是index.js里的Index父组件传给子组件BodyIndex的username：{this.props.username}</p>

        <br/><br/>

        <input type='button' value='提交，让age3变成50' onClick={this.changeUserInfo.bind(this)}/>
        {/*点击，执行 changeUserInfo 函数,为了让this找到值，这里要加 .bind(this)*/}
        <p>这是age3：{this.state.age3}</p>

        <br/><br/>

        <div>这是bodychild.js里的 BodyChild类添加的</div>
        <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
        {/*
          {...this.props} 表示将index.js传来的值，全部附给子组件 bodychild.js 里的 BodyChild
        */}
        {/*
          子页面 bodychild.js里的组件 BodyChild
          利用onChange={this.props.handleChildValueChange} 给它传入值
          它使用上面写的函数 handleChildValueChange 来改变 age4的 state
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

BodyIndex.propTypes={
/*给组件 BodyIndex 进行类型检测，如果有错，会报错，代码无法执行*/
  userid:React.PropTypes.number.isRequired
  /*
    测试 userid 的数据类型是否是数字 .number，而且必填 .isRequired
    这里的 userid 是从index.js的父组件 Index传来的
  */
}

BodyIndex.defaultProps = defaultProps;
//让 BodyIndex 组件启用 defaultProps ，是上面定义的默认值
