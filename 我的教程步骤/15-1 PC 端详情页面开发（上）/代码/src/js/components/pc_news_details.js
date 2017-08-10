import React from 'react';
import { Row, Col } from 'antd';
//加载 AntDesign样式 栅格化 https://ant.design/components/grid-cn/
export default class PCNewsDetails extends React.Component{
  constructor(){
    super();
    //设置 state需要写 constructor(){super();
    this.state={
      newsItem:''
    };
  }
  componentsDidMount(){
  //生命周期，组件加载完毕
      var myFetchOptions = {
        method: 'GET'
      };
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
  			this.setState({newsItem: json});
  			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        //设置页面标题
  		})
  }

  createMarkup(){
    return {__html:this.state.newsItem.pagecontent};
  };

  render(){
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
          </Col>
          <Col span={6}></Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}
