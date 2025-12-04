import React from 'react';
import { Routes } from 'react-router-dom';  
const App = () => {
  return (
  <Routes>
<Route path="/" element={<Home />} /> 
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/menu" element={<Menu />} />
<Route path="/cart" element={<Cart />} />   
  </Routes>
  );
}

export default App;