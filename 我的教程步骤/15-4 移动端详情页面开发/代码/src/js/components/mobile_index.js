import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import MobileList from './mobile_list';
//导入新闻列表模块

import {Carousel} from 'antd';
//轮播图

export default class MobileIndex extends React.Component{
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
        <MobileHeader></MobileHeader>
        <Tabs>
          <TabPane tab="头条" key="1">
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
            <MobileList count={20} type="top" />
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList count={20} type="shehui" />
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList count={20} type="guonei" />
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList count={20} type="guoji" />
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList count={20} type="yule" />
          </TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    )
  }
}
