import React from 'react';
import { Breadcrumb, Layout,  theme } from 'antd';
import { Outlet } from 'react-router-dom';
import CompMainMenu from '@/components/MainMenu';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {

  const {
    token: { colorBgContainer, },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <CompMainMenu />
      {/* 右边的内容 */}
      <Layout>
        {/* 右边头部 */}
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Breadcrumb style={{ margin: '16px ',lineHeight: '32px' }} items={[{ title: 'sample' }, { title: 'sample' }, { title: 'sample' }]} />
        </Header>
        {/* 中间内容 */}
        <Content style={{ margin: '16px 16px 0' ,background: colorBgContainer}} >
          <Outlet/>
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center' ,padding:0,lineHeight: '48px' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;