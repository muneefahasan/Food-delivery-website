import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPages/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/cart';
const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />

      <Route path='/login' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;