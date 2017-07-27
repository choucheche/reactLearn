import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
//导入列表页面
import ComponentDetails from './components/details';
//导入详情页面
import ComponentDetails2 from './components/details2';
//导入详情页面2
import {Router,Route,hashHistory} from 'react-router';
//导入路由功能
export default class Root extends React.Component{
  render(){
    return(
      //这里替换了之前的 Index,变成了程序的入口
      <Router history={hashHistory}>

        <Route component={Index} path="/">
          <Route component={ComponentDetails} path="details"></Route>
          {/*
            将组件嵌套进首页里,打开 http://localhost:8080/#/details 地址就能看到 details.js 里 ComponentDetails 的内容
            http://localhost:8080/ 首页是看不到的，details.js 里 ComponentDetails 的内容的
            details.js 里 ComponentDetails 算是子页面
          */}
          <Route component={ComponentDetails2} path="details2"></Route>
          {/*
            再创建另一个子页面,打开 http://localhost:8080/#/details2，它和 details 不同，但也是首页的子页面
          */}
        </Route>
        <Route component={ComponentList} path="list"></Route>

      </Router>
    );
  }
}
ReactDOM.render(<Root/>, document.getElementById('example'));
//以 Root 为整个APP的入口，而不再以 index.js 为入口了
