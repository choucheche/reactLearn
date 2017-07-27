import React from 'react';

var footerCss  =  require("../../css/footer.css");
//加载 footer.css，让不同页面的 css 不会冲突

export default class ComponentFooter extends React.Component{
/*
  创建一个类 ComponentFooter，它是继承于 React.Component 的子类
  类名必须大写
*/
  render(){
    console.log(footerCss);
    return (
      <footer className={footerCss.miniFooter}>
      {/*使用footer.css里的样式*/}
        <h1>这里是页脚，一般放置版权的一些信息</h1>
      </footer>
    )
  }
}
