import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

import PCNewsContainer from './pc_newscontainer';
//引用轮播图页面

export default class PCIndex extends React.Component{
  render(){
    return(
      <div>
        <PCHeader></PCHeader>
        <PCNewsContainer></PCNewsContainer>
        <PCFooter></PCFooter>
      </div>
    )
  }
}
