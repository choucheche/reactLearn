import React from 'react';
export default class ComponentList extends React.Component{
  render(){
    return (
      <div>
        <h2>这里是列表页面，url传来的Id值为: {this.props.params.id}</h2>
        {/*{this.props.params.id}表示拿到传来值的参数 id*/}
      </div>
    );
  };
}
