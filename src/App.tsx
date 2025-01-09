import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import { ShopAll } from './pages/ShopAll';
import { Collections } from './pages/Collections';
import { Outlet } from './pages/Outlet';
import { Profile } from './pages/Profile';
import { Favorites } from './pages/Favorites';
import { Cart } from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<ShopAll />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/outlet" element={<Outlet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;