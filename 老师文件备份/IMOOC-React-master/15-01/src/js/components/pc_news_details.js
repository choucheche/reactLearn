import React from 'react';
import {Row, Col} from 'antd';
export default class PCNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		});
		/*
      动态接口，根据调用它的函数，获取不同的内容
      .then(response => response.json())
      接口调用后，获取 json 数据
      .then(json => this.setState({news: json}))
      获取的json数据后，将json的值，给 this.setState.newsItem
    */
	};
	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
	render() {
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container">
						<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
					</Col>
					<Col span={6}></Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
