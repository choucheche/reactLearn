import React from 'react';

import {Card} from 'antd';
//卡片布局

import {Router, Route, Link, browserHistory} from 'react-router';

export default class PCNewsImageBlock extends React.Component{

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

    const styleImage ={
    //定义变量 styleImage 用于下面的图片样式
    //this.props.imageWidth 是从 pc_newscontainer.js 传来的
      display: "block",
      width: this.props.imageWidth,
      height: "90px"
    };

    const styleH3 ={
      /*
        超出宽度的文字变成...
        widthSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      */
      //this.props.imageWidth 是从 pc_newscontainer.js 传来的
      width: this.props.imageWidth,
      widthSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };

    const {news} = this.state;
    // {news} 获取到 this.state的数据
    /*判断 news 是否有值 news.length?a:b */
    const newsList = news.length?
    news.map((newsItem,index)=>(
    /*
      循环从接口获得的 news 这里的 newsItem 相当于 json[i]
      key={index} 写个属性 key 为第几个 li
      <Link> 写链接，跳转到详情页面 ，地址为 to= ，newsItem.uniquekey相当于 json[i].uniquekey，uniquekey为获取json返回的这条内容的 id
      style={styleImage}和style={styleH3}在上面有 const 来定义
    */
      <div key={index} class="imageblock">
        <Link to={'details/${newsItem.uniquekey}'} target="_blank">
          <div class="custom-image">
            <img src={newsItem.thumbnail_pic_s} alt="" style={styleImage}/>
          </div>
          <div class="custom-card">
            <h3 style={styleH3}>{newsItem.title}</h3>
            <p>{newsItem.author_name}</p>
          </div>
        </Link>
      </div>
    ))
    :
    '没有加载到任何新闻';

    return(
      <div className="topNewsImgList">
        <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
          {newsList}
          {/*将上面的 const newsList 插进来*/}
        </Card>
      </div>
    );
  }
}
