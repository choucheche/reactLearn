import React from 'react';

import { Row, Col } from 'antd';
//加载 AntDesign样式 栅格化 https://ant.design/components/grid-cn/
export default class PCFooter extends React.Component{

  render(){
    return(
      <footer>
        <Row>
        {/*一行*/}
          <Col span={2}></Col>
          {/*一列，span={2}表示占俩个栅格，一共有24个栅格*/}
          <Col span={20} className="footer">
            &copy;&nbsp;2016 ReactNews. All Right Reserved.
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    )
  }
}
