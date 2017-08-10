import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';
//引入评论模块
import { Row, Col, BackTop } from 'antd';
//加载 AntDesign样式 栅格化 https://ant.design/components/grid-cn/
//BackTop返回顶部
export default class MobileNewsDetails extends React.Component{
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
      <div id="mobileDetailsContainer">
        <MobileHeader></MobileHeader>
        <div class="ucmobileList">
          <Row>
            <Col span={24} className="container">
              <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
              <hr/>
              <CommonComments uniquekey={this.props.params.uniquekey}/>
            </Col>
          </Row>
        </div>
        <MobileFooter></MobileFooter>
        <BackTop/>
      </div>
    );
  }
}
