import React from 'react';

import { Row, Col } from 'antd';
//加载 AntDesign样式 栅格化 https://ant.design/components/grid-cn/
/*加载 AntDesign样式 栅格化 https://ant.design/components/menu-cn/*/
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
/*加载 AntDesign样式 栅格化 https://ant.design/components/menu-cn/ 结束*/
export default class PCHeader extends React.Component{

  constructor(){
    super();
    //想用 state，必须先用 constructor(){super();}
    this.state={
      current:'top',
      //设置默认的导航选中是哪个
    }
  }

  render(){
    return(
      <header>
        <Row>
        {/*一行*/}
          <Col span={2}></Col>
          {/*一列，span={2}表示占俩个栅格，一共有24个栅格*/}
          <Col span={4}>
            <a href="/" class="logo">
              <img src="./src/images/logo.png" alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            {/*<Menu>表示导航或菜单，https://ant.design/components/menu-cn/*/}
            <Menu mode="horizontal" selectedKeys={[this.state.current]}>
            {/*
              mode="horizontal"代表水平排列菜单
              selectedKeys={[this.state.current]} 代表默认选中下面<Menu.Item>的key的值
              为 this.state.current，this.state.current在上面定义了
            */}
              <Menu.Item key="top">
              {/*<Menu.Item>代表导航的链接，key="top"代表导航的索引值*/}
                <Icon type="appstore"/>头条
                {/*<Icon type="appstore"/>代表图标，type为图标样式*/}
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore"/>国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore"/>娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore"/>体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore"/>科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore"/>时尚
              </Menu.Item>
            </Menu>
            {/*<Menu>表示导航或菜单，https://ant.design/components/menu-cn/ 结束*/}
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}
