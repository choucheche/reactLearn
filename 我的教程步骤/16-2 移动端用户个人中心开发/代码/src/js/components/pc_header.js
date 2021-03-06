import React from 'react';

import { Row, Col } from 'antd';
//加载 AntDesign样式 栅格化 https://ant.design/components/grid-cn/
import { Tabs, Form, Input, Button, CheckBox, Modal,message } from 'antd';
//标签页，表单，文本框，按钮，多选框，模态框，提示框
const FormItem = Form.Item ;

/*加载 AntDesign样式 栅格化 https://ant.design/components/menu-cn/*/
import { Menu, Icon } from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
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
      action:'register',
      //指示按钮是登陆还是注册
      hasLogined:false,
      //是否已经登陆了
      userNickName:'',
      //用户名
      userid:0,
    }
  };

  componentWillMount() {
  /*生命周期，在组件将要加载时*/
		if (localStorage.userid != '') {
    //如果有 localStorage.userid，那么为登陆状态中
			this.setState({
				hasLogined: true
			});
			this.setState({
				userNickName: localStorage.userNickName,
				userid: localStorage.userid
			})
		}
  };

  setModalVisible(value){
  /*控制模态框是否显示*/
    this.setState({modalVisible: value});
  };

  handleClick(e) {
    if (e.key == "register") {
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
    e.preventDefault();
    //阻止默认行为
    var myFetchOptions = {
			method: 'GET'
		};
		var formData= this.props.form.getFieldsValue();
    //获取表单所有填写的值
    console.log(formData);
    /*
      formData 得到如下内容
      {r_userName: "123", r_password: "123", r_confirmPassword: "123"}
    */
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action
    +"&username="+formData.userName+"&password="+formData.password
    +"&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
		then(response=>response.json()).then(json=>{
    /*
      接口返回response
      response=>response.json()进行数据的json格式化
      .then(json=>{之后进行json
      ?action="+this.state.action 代表向接口传递登陆还是注册
      username和password代表登陆
      r_userName和r_password和r_confirmPassword代表注册
    */

    this.setState({userNickName:json.NickUserName,userid:json.UserId});
    /*
      返回 userNickName:json.NickUserName和userid:json.UserId
    */
    localStorage.userid = json.UserId;
    localStorage.userNickName = json.NickUserName;
    /*存储返回的用户信息*/

		});
    if(this.state.action=='login'){
    //如果登陆了
      this.setState({hasLogined:true});
      //设置 hasLogined 为已登陆状态
    }
    message.success("请求成功！");
    //出现
    this.setModalVisible(false);
    //隐藏模态框
  };

  logout() {
  //退出登陆
		localStorage.userid = '';
		localStorage.userNickName = '';
		this.setState({
			hasLogined: false
      //登陆状态为 false
		})
	};

  callback(key){
  //当点击模态框的 tabs 时，切换登陆和注册
    if(key==1){
      this.setState({action:'login'});
    }else if(key==2){
      this.setState({action:'register'});
    }
  }

  render(){
    let {getFieldDecorator} = this.props.form;
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
      <Link target="_blank)" to={'/usercenter'}>
        <Button type="dashed" htmlType="button">个人中心</Button>
      </Link>
      &nbsp;&nbsp;
      <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
      {/*onClick={this.logout.bind(this)} 执行 logout()函数*/}
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
              <Tabs type="card" onChange={this.callback.bind(this)}>
                <TabPane tab="注册" key="2">
                  <Form layout={'horizontal'} onSubmit={this.handleSubmit.bind(this)}>
                  {/* horizontal 水平排列布局，onSubmit点击时，执行 handleSubmit 函数*/}
                    <FormItem label="账户">
                      {getFieldDecorator('r_userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input placeholder="请输入您的账号"/>
                      )}
                      {/*{getFieldDecorator('userName'代表这个input的内容接收名*/}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator('r_password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                      })(
                        <Input type="password" placeholder="请输入您的密码"/>
                      )}
                      {/*{getFieldDecorator('r_password',代表这个input的内容接收名*/}
                    </FormItem>
                    <FormItem label="确认密码">
                      {getFieldDecorator('r_confirmPassword', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                      })(
                        <Input type="password" placeholder="请再次输入您的密码"/>
                      )}
                      {/*{getFieldDecorator('r_password',代表这个input的内容接收名*/}
                    </FormItem>
                    <Button type="primary" htmlType="submit" >注册</Button>
                  </Form>
                </TabPane>

                <TabPane tab="登陆" key="1">
                  <Form layout={'horizontal'} onSubmit={this.handleSubmit.bind(this)}>
                  {/* horizontal 水平排列布局，onSubmit点击时，执行 handleSubmit 函数*/}
                    <FormItem label="账户">
                      {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input placeholder="请输入您的账号"/>
                      )}
                      {/*{getFieldDecorator('userName'代表这个input的内容接收名*/}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                      })(
                        <Input type="password" placeholder="请输入您的密码"/>
                      )}
                      {/*{getFieldDecorator('r_password',代表这个input的内容接收名*/}
                    </FormItem>

                    <Button type="primary" htmlType="submit" >登陆</Button>
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
