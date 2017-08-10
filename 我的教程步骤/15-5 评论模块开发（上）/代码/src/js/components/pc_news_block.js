import React from 'react';

import {Card} from 'antd';
//卡片布局

import {Router, Route, Link, browserHistory} from 'react-router';

export default class PCNewsBlock extends React.Component{

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
      <li key={index}>
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
          {newsItem.title}
        </Link>
      </li>
    ))
    :
    '没有加载到任何新闻';

    return(
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
            {/*获取上面的 const newsList 放进来*/}
          </ul>
        </Card>
      </div>
    );
  }
}
