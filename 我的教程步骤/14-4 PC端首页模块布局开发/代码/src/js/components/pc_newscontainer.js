import React from 'react';
import {Row,Col} from 'antd';
//栅格
/*标签页*/
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
/*标签页*/
import {Carousel} from 'antd';
//轮播图

export default class PCNewsContainer extends React.Component{
  render(){

    /*轮播图设置*/
    const settings={
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    }
    /*轮播图设置 结束*/

    return(
      <div>
        <Row>
          <Col span={2}></Col>
          {/* span={2} 栅格占2个，一共24个*/}
          <Col span={20} class="container">
            <div class="leftContainer">
              {/*轮播图*/}
              <div class="carousel">
                <Carousel {...settings}>
                  <div><img src="./src/images/carousel_1.jpg"/></div>
                  <div><img src="./src/images/carousel_1.jpg"/></div>
                  <div><img src="./src/images/carousel_1.jpg"/></div>
                  <div><img src="./src/images/carousel_1.jpg"/></div>
                </Carousel>
              </div>
              {/*轮播图 结束*/}
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
