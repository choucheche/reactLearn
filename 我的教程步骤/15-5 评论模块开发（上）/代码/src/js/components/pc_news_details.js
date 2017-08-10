import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

import PCNewsImageBlock from './pc_news_image_block';
//引入图片新闻页面

import { Row, Col, BackTop } from 'antd';
//加载 AntDesign样式 栅格化 https://ant.design/components/grid-cn/
//BackTop返回顶部
export default class PCNewsDetails extends React.Component{
  constructor(){
    super();
    //设置 state需要写 constructor(){super();
    this.state={
      newsItem:''
    };
  };

  componentDidMount(){
  //生命周期，组件加载完毕
      var myFetchOptions = {
        method: 'GET'
      };

      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
  			this.setState({newsItem: json});
  			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
  		})
      //根据 uniquekey=" + this.props.params.uniquekey 得到相应的接口信息
  };

  createMarkup(){
    return {__html: this.state.newsItem.pagecontent};
  };

  render(){
    return(
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
          </Col>
          <Col span={6}>
            {/*图片新闻*/}
            <PCNewsImageBlock count={40} type="top" width="100%" cartTitle="相关新闻" imageWidth="150px"/>
            {/*图片新闻 结束*/}
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter></PCFooter>
        <BackTop/>
      </div>
    );
  }
}
