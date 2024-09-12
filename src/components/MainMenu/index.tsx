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

import { useNavigate, useLocation } from 'react-router-dom';
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
    children: [
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
    children: [
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
  const currentRoute = useLocation();//获取当前路径

  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
  }


  // 刷新依然弹出 选择的二级选项 star
  let firstOpenKey: string = '';

  function findKey(obj:{key:string}){
    return obj.key == currentRoute.pathname;
  }

  for(let i =0;i<items.length;i++){
    if(items[i]!['children'] &&items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
      firstOpenKey = items[i]!.key as string;
      break;
    }
  }
  // end

  const [openKeys, setOpenKeys] = useState([firstOpenKey]);

  // for (const item of items) {
  //   if (item && item!.children) {
  //     const matchedChild = item.children.find(child => child.key === currentRoute.pathname);
  //     if (matchedChild) {
  //       firstOpenKey = item.key; // 如果找到匹配的子菜单项，返回父菜单项的key
  //       break;
  //     }
  //   }
  // }

  const onOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]]);

  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={[currentRoute.pathname]}
        mode="inline" items={items}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        onClick={menuClick} />
    </Sider>
  )
}
export default CompMainMenu;