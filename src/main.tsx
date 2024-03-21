import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化一般放在最前面
import 'reset-css'

// UI框架的样式


// 全局样式
import "@/assets/styles/global.scss"

// 组件的样式
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
