import App from '@/App';
import Home from '@/views/home';
import About from '@/views/about';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
// BrowserRouter  history模式    hash模式  HashedRouter
const baseRouter = () => (
  /*不用逻辑 可以不用 {
    return()
  }*/
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default baseRouter;