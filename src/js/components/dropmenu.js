import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Badge } from 'antd';
export default class Dropmenu extends React.Component{
  render(){
    return (
      <div id="dropcontent">
        <ul className="dropul">
          <a><li className="dropli">MY PROFILE<div className="badgenm"><Badge count={25}/></div></li></a>
          <div className="divider"></div>
          <a><li className="dropli">MY PROJECTS<div className="badgenm"><Badge count={25}/></div></li></a>
          <div className="divider"></div>
          <a><li className="dropli">NOTIFICATIONS<div className="badgenm"><Badge count={25}/></div></li></a>
          <div className="divider"></div>
          <a><li className="dropli">TASKS</li></a>
          <div className="divider"></div>
          <a><li className="dropli">HELP</li></a>
          <div className="divider"></div>
          <a><li className="dropli">LOGOUT</li></a>
        </ul>
      </div>
    );
  };
}
