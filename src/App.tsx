import  { useState } from 'react'
import { Button } from 'antd';
import {
  HomeOutlined,
 
} from '@ant-design/icons';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <Button type="primary">Primary Button</Button>
      <HomeOutlined />
    </div>
  )
}

export default App
