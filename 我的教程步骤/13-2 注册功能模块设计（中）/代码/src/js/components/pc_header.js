import React from 'react';

import { Row, Col } from 'antd';
//加载 AntDesign样式 栅格化 https://ant.design/components/grid-cn/
import { Tabs, Form, Input, Button, CheckBox, Modal,message } from 'antd';
//标签页，表单，文本框，按钮，多选框，模态框，提示框
const FormItem = Form.Item ;

/*加载 AntDesign样式 栅格化 https://ant.design/components/menu-cn/*/
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
/*加载 AntDesign样式 栅格化 https://ant.design/components/menu-cn/ 结束*/
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component{

  constructor(){
    super();
    //想用 state，必须先用 constructor(){super();}
    this.state={
      current:'top',
      //设置默认的导航选中是哪个
      modalVisible:false,
      //模态框/弹出框默认是隐藏状态
      action:'login',
      //指示按钮是登陆还是注册
      hasLogined:false,
      //是否已经登陆了
      userNickName:'',
      //用户名
      userid:0,
    }
  };

  setModalVisible(value){
  /*控制模态框是否显示*/
    this.setState({modalVisible: value});
  };

  handleClick(e) {
    if (e.key = "register") {
    /*如果点击导航上的按钮的 key为 register*/
      this.setState({current: 'register'});
      /*这个按钮，做高亮*/
      this.setModalVisible(true);
      /*显示它的模态框*/
    }else{
      this.setState({current: e.key});
      /*点击的哪个按钮，哪个按钮就高亮*/
    }
  }

  handleSubmit(e){
  //页面开始向API提交数据
  };

  render(){
    let {getFieldProps} = this.props.form;
    {/*判断用户是否已经登陆，三元运算，注意看 下面的 ?号和 : 号*/}
    {/*
      下面的 const userShow 代表定义变量 userShow，用 a?b:c 的方式来判断用户的登陆状态，
      来给 userShow写入不同的代码
    */}
    const userShow = this.state.hasLogined
    ?<Menu.Item key="logout" className="register">
    {/*已登陆状态*/}
      <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
      &nbsp;&nbsp;
      <Link target="_blank)">
        <Button type="dashed" htmlType="button">个人中心</Button>
      </Link>
      &nbsp;&nbsp;
      <Button type="ghost" htmlType="button">退出</Button>
    </Menu.Item>
    :
    <Menu.Item key="register" className="register">
    {/*未登陆状态*/}
      <Icon type="appstore"/>注册/登陆
    </Menu.Item>;
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
            <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
            {/*
              mode="horizontal"代表水平排列菜单
              selectedKeys={[this.state.current]} 代表默认选中下面<Menu.Item>的key的值
              为 this.state.current，this.state.current在上面定义了
              onClick={this.handleClick.bind(this)} 点击执行 handleClick 函数
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
              {userShow}
              {/*将上满的函数，写入<Menu>*/}
            </Menu>
            {/*<Menu>表示导航或菜单，https://ant.design/components/menu-cn/ 结束*/}

            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "关闭">
            {/*
              <Modal>代表模态框，弹出框
              wrapClassName="vertical-center-modal"代表自带的类
              visible={this.state.modalVisible} 控制是否显示隐藏
              onCancel= {()=>this.setModalVisible(false)} 当点击 cancle按钮时，设置 this.state.modalVisible
              为 false，这样就能隐藏模态框
              onOk={() => this.setModalVisible(false)} okText = "关闭" 当点击OK时，设置 this.state.modalVisible
              为 false，这样就能隐藏模态框，并将 ok 按钮的文字变为 关闭
            */}

              {/*注册功能*/}
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                  <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                  {/* horizontal 水平排列布局，onSubmit点击时，执行 handleSubmit 函数*/}
                    <FormItem label="账户">
                      <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                      {/*{...getFieldProps('r_userName')}代表这个input的内容接收名*/}
                    </FormItem>
                    <FormItem label="密码">
                      <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                    </FormItem>
                    <FormItem label="确认密码">
                      <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit" >注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
              {/*注册功能 结束*/}

            </Modal>

          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}

export default PCHeader = Form.create({})(PCHeader);
/*render()后，将类做一个二次的类 PCHeader，进行封装，
同时将上面的
export default class PCHeader extends React.Component{
改为
class PCHeader extends React.Component{
*/
