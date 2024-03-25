import React, { useState } from 'react';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;



type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('', '/page1', <PieChartOutlined />),
//   getItem('Option 2', '/page2', <DesktopOutlined />),
//   getItem('User', 'page3', <UserOutlined />, [
//     getItem('Tom', '/about'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

const items: MenuItem[] = [
  {
    label: 'Option 1',
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: 'Option 2',
    key: '/page2',
    icon: <DesktopOutlined />
  },
  {
    label: 'User',
    key: 'page3',
    icon: <UserOutlined />,
    children:[
      {
        label: 'Tom',
        key: '/about',
      },
      {
        label: 'Bill',
        key: '4',
      },
      {
        label: 'Alex',
        key: '5',
      },

    ]
  },
  {
    label: 'Team',
    key: 'page4',
    icon: <TeamOutlined />,
    children:[
      {
        label: 'Team 1',
        key: '6',
      },
      {
        label: 'Team 2',
        key: '7',
      },
    ]
  },
  {
    label: 'Files',
    key: '9',
    icon: <FileOutlined />
  },
]

const CompMainMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigateTo = useNavigate();


  const menuClick = (e: { key: string }) => {
    console.log(e.key, "dianjile ")
    navigateTo(e.key)
  }
  const onOpenChange = (keys: string[]) => {
    if (keys.length > 1) {
      keys.splice(0, 1);
    }
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={['/page1']}
        mode="inline" items={items}
        onOpenChange={onOpenChange}
        onClick={menuClick} />
    </Sider>
  )
}
export default CompMainMenu;