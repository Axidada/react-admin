import React, { lazy } from 'react'
import Home from '@/views/home'
// import About from '@/views/about'
import Login from '@/views/login/index'

// 懒加载

const Page1 = lazy(() => import('@/views/page1'))
const Page2 = lazy(() => import('@/views/page2'))
const About = lazy(() => import('@/views/about'))
const P404 = lazy(() => import('@/views/404'))

import { Navigate } from 'react-router-dom' //重定向组件

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>
    {comp}
  </React.Suspense>
)
const routes = [
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/',
    element:<Home/>,
    children:[
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />),
      },
      {
        path: '/about',
        element: withLoadingComponent(<About />),
      },
    ]
  },
  {
    path: '/login',
    element:  <Login />
  },
  // 其他不存在的页面全部跳转404
  {
    path: '*',
    element: withLoadingComponent(<P404 />)
  },
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  // {
  //   path: '/about',
  //   element: withLoadingComponent(<About />)
  // }
]
export default routes