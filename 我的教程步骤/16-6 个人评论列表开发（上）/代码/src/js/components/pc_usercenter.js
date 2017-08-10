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
			previewVisible:false,
			//头像预览弹窗打开状态
			usercollection:'',
			//收藏文章列表
			usercomments:''
			//用户评论列表
		}
	}

	handleCancel(){
	//头像预览弹窗关闭
		this.setState({ previewVisible: false })
		//头像预览弹窗打开状态
	};

	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercollection:json});
			//获取收藏列表
		});
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercomments:json});
			//获取评论列表
		});
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

		const {usercollection,usercomments} = this.state;
		/*循环收藏列表*/
		const usercollectionList = usercollection.length ?
		usercollection.map((uc,index)=>(
			<Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
				<p>{uc.Title}</p>
			</Card>
		))
		:
		'您还没有收藏任何的新闻，快去收藏一些新闻把';
		/*循环收藏列表 结束*/
		/*循环评论列表*/
		const usercommentsList = usercomments.length ?
		usercomments.map((comment,index)=>(
			<Card key={index} title={`您于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
				<p>{comment.Comments}</p>
			</Card>
		))
		:
		'您还没有发表过任何评论，快去评论一些新闻把';
		/*循环评论列表 结束*/
    return(
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
								<div class="comment">
									<Row>
										<Col span={24}>
											{usercollectionList}
										</Col>
									</Row>
								</div>
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
							<div class="comment">
								<Row>
									<Col span={24}>
										{usercommentsList}
									</Col>
								</Row>
							</div>
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
