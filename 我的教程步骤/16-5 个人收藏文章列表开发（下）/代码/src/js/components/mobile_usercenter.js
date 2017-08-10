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

import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router';
import {Upload} from 'antd';
//上传插件
export default class MobileuserCenter extends React.Component{

	constructor(){
		super();
		this.state={
			previewImage:'',
			//上传图片地址
			previewVisible:false,
			//头像预览弹窗打开状态
			usercollection:''
			//收藏文章
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

			/*循环收藏列表*/
			const {usercollection} = this.state;
			const usercollectionList = usercollection.length ?
			usercollection.map((uc,index)=>(
				<Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
					<p>{uc.Title}</p>
				</Card>
			))
			:
			'您还没有收藏任何的新闻，快去收藏一些新闻把';
			/*循环收藏列表 结束*/

    return(
      <div>
        <MobileHeader></MobileHeader>
        <Row>
          <Col span={24}>
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
        </Row>
        <MobileFooter></MobileFooter>
      </div>
    );
  }
}
