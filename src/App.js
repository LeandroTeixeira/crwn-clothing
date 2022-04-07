import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavBar from './routes/nav-bar/nav-bar.component';
import Authentication from './routes/authentication/authentication.component';

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
        <Route path="auth" element={<Authentication />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}

export default App;
