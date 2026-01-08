import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPages/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/cart';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path='/login' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      {/* 
      <Route path="/checkout" element={
        <PrivateRoute>
          <Checkout /> 
        </PrivateRoute>
      } />
      */}
    </Routes>
  );
}

export default App;