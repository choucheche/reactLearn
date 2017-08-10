import React from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
	Card,
	notification
} from 'antd';

import PCHeader from './pc_header';
import PCFooter from './pc_footer';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router';
import {Upload} from 'antd';
//上传插件
export default class PCuserCenter extends React.Component{

	constructor(){
		super();
		this.state={
			previewImage:'',
			//上传图片地址
			previewVisible:false
			//头像预览弹窗打开状态
		}
	}

	handleCancel(){
	//头像预览弹窗关闭
		this.setState({ previewVisible: false })
		//头像预览弹窗打开状态
	};

  render(){

		const props = {
			action: 'http://newsapi.gugujiankong.com/handler.ashx',
			//文件上传地址
			headers: {
				"Access-Control-Allow-Origin":"*"
			},
			//跨域的定义
			listType: 'picture-card',
			//支持样式
			defaultFileList:[
				{
					uid:-1,
					name:'xxx.png',
					state: 'done',
					url:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
					//默认图片
					thumbUrl:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
					//缩略图
				}
			],
			//当没有上传的时候，可以指定些东西
			onPreview: (file)=>{
			//预览文件
				this.setState({previewImage:file.url,previewVisible:true});
				//previewImage上传图片地址，previewVisible头像预览弹窗打开状态
			}
		};

    return(
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">

              </TabPane>
              <TabPane tab="我的评论列表" key="2">

              </TabPane>
              <TabPane tab="头像设置" key="3">
								<div className="clearfix">
									<Upload {...props}>
										<Icon type="plus"/>
										<div className="ant-upload-text">上传照片</div>
									</Upload>
									<Modal visible ={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
									{/*
										visible ={this.state.previewVisible}预览图片弹窗状态
										onCancel={this.handleCancel.bind(this)}关闭弹窗事件
									*/}
										<img alt="预览" src={this.state.previewImage}/>
									</Modal>
								</div>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter></PCFooter>
      </div>
    );
  }
}
