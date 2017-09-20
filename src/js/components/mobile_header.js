import React from 'react';
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Avatar } from 'antd';
import { Popover, Button } from 'antd';
import Dropmenu from './dropmenu';
const buttonWidth = 70;
const content =<Dropmenu/>
export default class MobileHeader extends React.Component {
	constructor(){
		super();
		this.state={
			companyname:"COMPANY NAME",

		}
	}

	render() {
		return (
			<div id="mobileheader">
				<div id="header">
					<Row>
			       <Col span={20}><span>COMPNAY NAME</span></Col>
			       <Col span={4}>
							 <Popover placement="bottomRight" content={content} trigger="click">
		 						<Avatar size="small" icon="user" />
		 					</Popover>
						 </Col>
			     </Row>


				</div>
				<Menu
				onClick={this.handleClick}
				mode="vertical"
				style={{background: "#F3F3F3"}}
				>
					<Menu.Item key="DASHBOARD">
						DASHBOARD
					</Menu.Item>

					<Menu.Item key="PROJECTS">
					PROJECTS
					</Menu.Item>
					<Menu.Item key="TEAM">
						TEAM
					</Menu.Item>
					<Menu.Item key="COMPANY">
					COMPANY
					</Menu.Item>

				</Menu>

			</div>
		);
	};
}
