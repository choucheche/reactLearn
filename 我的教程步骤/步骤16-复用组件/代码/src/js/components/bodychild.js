/*这是 bodyindex.js 里 BodyIndex 的子组件*/
import React from 'React';

export default class BodyChild extends React.Component{
  render(){
    return(
      <div>
        <p>子页面输入：<input type='text'/></p>
        <p>子页面输入，给父页面动态响应age4的值：<input type='text' onChange={this.props.handleChildValueChange}/></p>
        {/*
          当子页面这input发生改变，运行 handleChildValueChange这个自定义函数
          当它输入值的时候，bodyindex.js里的 age4会立刻改变值
        */}
        <p>这是从index.js传来的 {this.props.userid} {this.props.username} <br/> 这是从bodyindex.js传来的 {this.props.id}</p>
        {/*
          {this.props.userid}的值是从 index.js，给bodyindex.js，再通过 {...this.props} 集体传来的
          {this.props.id} 是 通过 bodyindex.js 的 id={4} 传来的
        */}
      </div>
    )
  }
}
