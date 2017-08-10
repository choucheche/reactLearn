import React from 'react';

import {Row,Col} from 'antd';
//栅格

import {Router, Route, Link, browserHistory} from 'react-router';

export default class MobileList extends React.Component{

  constructor(){
    super();
    //设置 state需要写 constructor(){super();
    this.state={
      news:''
    };
  }

  componentWillMount(){
  //生命周期，组件将要加载
    var myFetchOptions = {
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    /*
      动态接口，根据调用它的函数，获取不同的内容
      .then(response => response.json())
      接口调用后，获取 json 数据
      .then(json => this.setState({news: json}))
      获取的json数据后，将json的值，给 this.setState.news
    */
  }

  render(){

    const {news} = this.state;
    // {news} 获取到 this.state的数据
    /*判断 news 是否有值 news.length?a:b */
    const newsList = news.length?
    news.map((newsItem,index)=>(
    /*
      循环从接口获得的 news 这里的 newsItem 相当于 json[i]，
      key={index} 写个属性 key 为第几个 li
      <Link> 写链接，跳转到详情页面 ，地址为 to= ，newsItem.uniquekey相当于 json[i].uniquekey，uniquekey为获取json返回的这条内容的 id
    */
      <section key={index} className="m_article list-item special_section clearfix">
        <Link to={'details/${newsItem.uniquekey}'}>
          <div className="m_aticle_img">
            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
          </div>
          <div className="m_aticle_info">
            <div className="m_aticle_title">
              <span>{newsItem.title}</span>
            </div>
            <div className="m_article_desc clearfix">
              <div className="m_article_desc_l">
                <span className="m_article_channel">{newsItem.realtype}</span>
                <span className="m_article_time">{newsItem.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    ))
    :
    '没有加载到任何新闻';

    return(
      <div>
        <Row>
          <Col span={24}>
            {newsList}
            {/*{newsList}是上面 const newsList定义的变量*/}
          </Col>
        </Row>
      </div>
    );
  }
}
