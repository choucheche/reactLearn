//评论模块
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

class CommonComments extends React.Component{
  constructor(){
    super();
    this.state = {
      comments: ''
    };

    handleSubmit(){

    };

    render(){
      return(
        let {getFieldProps} = this.props.form;
        <div class="comment">
          <Row>
            <Col span={24}>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="您的评论">
                  <Input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initiaValue: ''})}/>
                  {/*...getFieldProps('remark',{initiaValue: ''})代表写默认值*/}
                </FormItem>
                <Button type="primary" htmlType="submit">提交评论</Button>
              </Form>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default CommonComments = Form.create({})(CommonComments);
