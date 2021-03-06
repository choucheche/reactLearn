var React = require('react');
var ReactDOM = require('react-dom');

import ComponentHeader from './components/header';
/*
导入 \src\js\components\header.js 里的 ComponentHeader 类
从 ./components/header 这个路径下
*/
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
/*导入多个类，ComponentFooter 和 BodyIndex */
class Index extends React.Component {
  render() {
    var component;
    if(true){
      component = <ComponentHeader/>;
    }else{
      component = '123';
    }

		return (
			<div>
        {component}
        <BodyIndex/>
        <ComponentFooter/>
      </div>
    );
  }
  /*
    直接写类名 ComponentHeader
    在 render 的 return 里面，必须有一个根节点，这里用的 <div>

    var component = <ComponentHeader/>;
    将类，写成变量的模式，可以在 return 里写成 {component} 也相当于 <ComponentHeader/>

    也可以在 render 里写 if判断，来根据需求取不同的值

    render() 的 return 里写多个类
  */
}

ReactDOM.render(<Index/>,document.getElementById('example'));
// 给根目录的 index.html 里的 #example 绑定上 类 Index
// 这样 就给 #example 里加入了 3个类 <ComponentHeader/> <BodyIndex/> <ComponentFooter/>
