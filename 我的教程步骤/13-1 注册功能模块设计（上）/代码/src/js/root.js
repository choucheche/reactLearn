import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
//导入路由功能

import PCIndex from './components/pc_index';
//导入PC首页模块 PCIndex
import MobileIndex from './components/mobile_index';
//导入PC首页模块 PCIndex
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
          <PCIndex></PCIndex>
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
        {/*如果屏幕的宽度最大为 1224px 时，为移动页面*/}
          <MobileIndex></MobileIndex>
        </MediaQuery>
      </div>
    );
  }
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
//以 Root 为整个APP的入口
