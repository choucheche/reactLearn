import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
//导入路由功能
import { Button } from 'antd';
import 'antd/dist/antd.css';
export default class Root extends React.Component{
  render(){
    return(
      <div>
        Init<br/>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
//以 Root 为整个APP的入口
