import React from 'react';
//import logo from './logo.svg';
import '../src/assets/css/App.css';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Card, Row } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const cardData=[{
  name : "Cha Eunwoo",
  job : "artist"
},
{
  name: "Im Yuuhi",
  job :"Actress, CEO of The House"
},
{
  name :"Do Kyungsoo",
  job :"Manager of Production"
},
{
  name : "Yuhi Creasia",
  job : "Producer of \"the Surgery\""
}
]

function App() {
  return (
    <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <UserOutlined />
          <span className="nav-text">Profile</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span className="nav-text">Video</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span className="nav-text">Download</span>
        </Menu.Item>
        <Menu.Item key="4">
          <BarChartOutlined />
          <span className="nav-text">Statistic</span>
        </Menu.Item>
        <Menu.Item key="5">
          <CloudOutlined />
          <span className="nav-text">Cloud</span>
        </Menu.Item>
        <Menu.Item key="6">
          <AppstoreOutlined />
          <span className="nav-text">Category</span>
        </Menu.Item>
        <Menu.Item key="7">
          <TeamOutlined />
          <span className="nav-text">People</span>
        </Menu.Item>
        <Menu.Item key="8">
          <ShopOutlined />
          <span className="nav-text">Store</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <div className="App">
      {
        cardData.map( data =>
          <Card title={data.name} bordered={true} style={{ margin:10,display:'inline-block', width: 300 }}>
            <p>{data.job}</p>
          </Card>
      )
    }
    </div>
    </Row>
  </div>,
  
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  );
}



export default App;
