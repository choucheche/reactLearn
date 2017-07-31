import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
//导入路由功能

import PCIndex from './components/pc_index';
//导入PC首页模块 PCIndex
import 'antd/dist/antd.css';
export default class Root extends React.Component{
  render(){
    return(
      <div>
        <PCIndex></PCIndex>

      </div>
    );
  }
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
//以 Root 为整个APP的入口
