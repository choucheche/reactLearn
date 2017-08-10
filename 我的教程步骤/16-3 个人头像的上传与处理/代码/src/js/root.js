import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
//导入路由功能

import PCIndex from './components/pc_index';
//导入PC首页模块 PCIndex
import MobileIndex from './components/mobile_index';
//导入PC首页模块 PCIndex

import PCNewsDetails from './components/pc_news_details';
//导入PC详情模块 PCNewsDetails

import MobileNewsDetails from './components/mobile_news_details';
//导入手机详情模块 PCNewsDetails

import PCuserCenter from './components/pc_usercenter';
//导入PC个人中心 PCuserCenter

import MobileuserCenter from './components/mobile_usercenter';
//导入mobile个人中心 MobileuserCenter

import 'antd/dist/antd.css';
//导入 antd 模板样式;
import MediaQuery from 'react-responsive';
//导入自适应响应式插件
export default class Root extends React.Component{
  render(){
    return(
      <div>
        <MediaQuery query='(min-device-width:1224px)'>
        {/*如果屏幕的宽度最小为 1224px 时，为PC页面*/}
          <Router history={hashHistory}>
            <Route path="/" component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
            <Route path="/usercenter" component={PCuserCenter}></Route>
          </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
        {/*如果屏幕的宽度最大为 1224px 时，为移动页面*/}
          <Router history={hashHistory}>
            <Route path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            <Route path="/usercenter" component={MobileuserCenter}></Route>
          </Router>
        </MediaQuery>
      </div>
    );
  }
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
//以 Root 为整个APP的入口
