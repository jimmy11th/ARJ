import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import HomePage from '@/pages/Home/HomePage';
import { Route, Routes } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
