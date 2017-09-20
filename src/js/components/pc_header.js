import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Avatar } from 'antd';
import { Popover, Button } from 'antd';
import Dropmenu from './dropmenu';
const buttonWidth = 70;
const content =<Dropmenu/>
export default class PCheader extends React.Component{
  constructor(){
    super();
    this.state={
      companyname:"COMPANY NAME",

    }
  }
  render(){
    return (
      <div id="pcheader">
        <Row>
          <Col span={12}>
            <div id="companyname">
              {this.state.companyname}
            </div>
          </Col>
          <Col span={12}>
              <Menu
              onClick={this.handleClick}
              mode="horizontal"
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
                <div>
                  <Popover placement="bottomRight" content={content} trigger="click">
                    <Avatar size="large" icon="user" />
                  </Popover>
                </div>
              </Menu>


          </Col>
        </Row>
      </div>
    );
  };
}
