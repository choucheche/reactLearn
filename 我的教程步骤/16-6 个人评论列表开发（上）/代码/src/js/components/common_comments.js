//评论模块
import React from 'react';

import { Row, Col } from 'antd';
//加载 AntDesign样式 栅格化 https://ant.design/components/grid-cn/
import { Tabs, Form, Input, Button, CheckBox, Modal,message,Card } from 'antd';
//标签页，表单，文本框，按钮，多选框，模态框，提示框
const FormItem = Form.Item ;

/*加载 AntDesign样式 栅格化 https://ant.design/components/menu-cn/*/
import { Menu, Icon } from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
/*加载 AntDesign样式 栅格化 https://ant.design/components/menu-cn/ 结束*/
const TabPane = Tabs.TabPane;

import { notification } from 'antd';
//全局提醒
class CommonComments extends React.Component{
    constructor() {
        super();
        this.state = {
            comments: ''
        };
    };

    componentDidMount() {
    //生命周期，组件加载完毕
      var myFetchOptions = {
        method: 'GET'
      };
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
        this.setState({comments: json});
      });
    };

    handleSubmit(e) {
      e.preventDefault();
  		var myFetchOptions = {
  			method: 'GET'
  		};
  		var formdata = this.props.form.getFieldsValue();
  		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
  			this.componentDidMount();
  		})
      /*
        这是添加评论的接口，传userid，uniquekey，commnet
        当提交完评论后，需要将评论区域重新刷新下，调用上面的 componentDidMount()
      */
    };

    addUserColletion(){
      var myFetchOptions = {
        method: 'GET'
      };
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey,myFetchOptions)
			.then(response=>response.json())
			.then(json=>{
				//收藏成功以后进行一下全局的提醒
        notification['success']({message:'ReactNews提醒',description:'收藏文章成功'});
        //全局提醒插件，当success时，写入参数 message，description
			});
    };

    render(){
      let { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
  		const {comments} = this.state;
  		const commnetList = comments.length
  			? comments.map((comment, index) => (
  				<Card key={index} title={comment.UserName} extra={<a href = "#"> 发布于 {comment.datetime} </a>}>
  					<p>{comment.Comments}</p>
  				</Card>
  			))
  			: '没有加载到任何评论';
      return(
        <div class="comment">
          <Row>
            <Col span={24}>
              {commnetList}
              <Form onSubmit ={this.handleSubmit.bind(this)}>
                <FormItem label="您的评论">
                  {getFieldDecorator('remark', {
                    rules: [{ required: true, message: 'Please input your anything!' }],
                  })(
                    <Input type="textarea" placeholder="随便写" />
                  )}

                </FormItem>
                <Button type="primary" htmlType="submit">提交评论</Button>
                &nbsp;&nbsp;
                <Button type="primary" htmlType="button" onClick={this.addUserColletion.bind(this)}>收藏该文章</Button>
                {/*收藏文章 点击触发 addUserColletion 函数*/}
              </Form>
            </Col>
          </Row>
        </div>

      );
      {/*...getFieldProps('remark',{initiaValue: ''})代表写默认值*/}
  	};
  }

export default CommonComments = Form.create({})(CommonComments);
