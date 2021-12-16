import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';


import MyNavLink from '../MyNavLink/index'

import './index.css'
import React from 'react'
const { SubMenu } = Menu;

export default class NavBar extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <div className="NavBar">
        <Menu
          onClick={this.handleClick}
          style={{ width: 256, height: 'calc(100vh - 65px)', marginTop: 65 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="文章">
            <Menu.ItemGroup key="g1" >
              <Menu.Item key="1">
                <MyNavLink to="/main/allArticle">
                  所有文章
                </MyNavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <MyNavLink to="/main/writeArticle">
                  写文章
                </MyNavLink>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="标签管理">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          */}
        </Menu> 




      </div>


    );
  }
}