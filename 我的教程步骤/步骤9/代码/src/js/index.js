var React = require('react');
var ReactDOM = require('react-dom');

import ComponentHeader from './components/header';
/*
导入 \src\js\components\header.js 里的 ComponentHeader 类
从 ./components/header 这个路径下
*/
class Index extends React.Component {
  render() {
		return (
			<div>
				<ComponentHeader/>

        <h2>页面的主体内容</h2>
      </div>
    );
  }
  /*
    直接写类名 ComponentHeader
    在 render 的 return 里面，必须有一个根节点，这里用的 <div>
  */
}

ReactDOM.render(<Index/>,document.getElementById('example'));
// 给根目录的 index.html 里的 #example 绑定上 类 Index
