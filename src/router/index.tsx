import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default baseRouter;