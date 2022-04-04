import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import AppContext from './services/context';
import globalData from './services/globalData';
import NavBar from './routes/nav-bar/nav-bar.component';

function NotFound() {
  return (
    <div>
      <h1>Page not Found</h1>
    </div>
  );
}

function App() {
  return (
    <AppContext.Provider value={globalData}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
