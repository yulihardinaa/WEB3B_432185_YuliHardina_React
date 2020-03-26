import React, { Component } from 'react';
import { Menu } from 'antd';
import '../layout/css/navbar-style.css';
import {
  LikeOutlined,
  AppstoreOutlined,
  MehOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Link, Route } from 'react-router-dom';


const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <AppstoreOutlined />
            <Link to="/">Home</Link> 
        </Menu.Item>
        <Menu.Item key="person">
          <UserOutlined/>
         <Link to="/aboutMe">About Me</Link> 
        </Menu.Item>

        <Menu.Item key="app">
          <MehOutlined />
          <Link to="/portfolio">Portofolio</Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <SettingOutlined />
              Team Work
            </span>
          }
        >
          <Menu.ItemGroup title="Team Working">
            <Menu.Item key="KMHD">KMHD UGM</Menu.Item>
            <Menu.Item key="Himakomsi">Koperasi "Himakomsi"</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      
        
        <Menu.Item key="resume">
          <LikeOutlined />
          <Link to="/resume">Resume</Link>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
