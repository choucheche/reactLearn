import React from 'react';
import {Row,Col} from 'antd';
//栅格
/*标签页*/
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
/*标签页*/
import {Carousel} from 'antd';
//轮播图

import PCNewsBlock from './pc_news_block';
//引入卡片新闻页面

import PCNewsImageBlock from './pc_news_image_block';
//引入图片新闻页面

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
              {/*图片新闻*/}
              <PCNewsImageBlock count={3} type="guoji" width="430px" cartTitle="国际头条" imageWidth="112px"/>
              {/*图片新闻 结束*/}
            </div>
            {/*写入卡片新闻*/}
            <Tabs class="tabs_news">
              <TabPane tab="头条新闻" key="1">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                {/*PCNewsBlock 调用卡片新闻组件，数量为 22 条，内容类型为 top*/}
              </TabPane>
              <TabPane tab="国际" key="2">
                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                {/*PCNewsBlock 调用卡片新闻组件，数量为 22 条，内容类型为 top*/}
              </TabPane>
            </Tabs>
            {/*写入卡片新闻 结束*/}
            <div class="clear">
              {/*图片新闻*/}
              <PCNewsImageBlock count={8} type="guoji" width="100%" cartTitle="国际头条" imageWidth="175px"/>
              {/*图片新闻 结束*/}
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
