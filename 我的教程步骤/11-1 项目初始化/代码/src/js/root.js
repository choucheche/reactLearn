import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
//导入路由功能
export default class Root extends React.Component{
  render(){
    return(
      <div>Init</div>
    );
  }
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
//以 Root 为整个APP的入口
