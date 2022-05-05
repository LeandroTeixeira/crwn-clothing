import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavBar from './routes/nav-bar/nav-bar.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

function NotFound() {
  return (
    <div>
      <h1>Page not Found</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}

export default App;
