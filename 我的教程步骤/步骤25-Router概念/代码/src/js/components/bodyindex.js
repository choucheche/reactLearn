import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';

import { Input } from 'antd';
//引入安装好的 ant.design 框架的 Input 样式

export default class BodyIndex extends React.Component{
/*
  创建一个类 BodyIndex，它是继承于 React.Component 的子类
  类名必须大写
*/

  render(){
		/*内联样式*/
    const styleComponentHeader = {
      form:{
        paddingTop:"10px",
				paddingBottom:"10px",
				marginBottom:"0px"
      }
    };
    /*内联样式 结束*/
    return (
      <div>
				<form style={styleComponentHeader.form}>
					<Input placeholder="Basic usage" />
				</form>
      </div>

    )
  }
}
