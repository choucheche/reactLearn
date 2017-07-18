import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyIndex extends React.Component{
/*
  创建一个类 BodyIndex，它是继承于 React.Component 的子类
  类名必须大写
*/
  render(){

    var userName1 = '';

    var userName2 = '123';
    var boolInput = false;

    var html = 'abc&nbsp;&nbsp;123';
    {/*react是不认识 &nbsp;的 需要转码成 Unicode*/}
    var html2 = 'abc\u0020\u0020123';
    {/*
      这里的 \u0020 相当于 &nbsp;
      是用 http://tool.chinaz.com/tools/unicode.aspx
      里的 中文 转 Unicode 转换的
      想要转码的输入 俩个 空格键 点击转码，就变成了 \u0020\u0020
    */}

    return (
      <div>
        <h2>这里是页面的主题内容</h2>

        <p>{userName1==''?'用户还没有登陆':'用户名：'+userName1}</p>
        {/*是否有用户名，来判断用户是否登陆*/}

        <p><input type='button' value={userName2} disabled={boolInput}/></p>
        {/*属性值的动态输出*/}

        <p>{html}</p>
        <p>{html2}</p>
      </div>
    )
  }
}
