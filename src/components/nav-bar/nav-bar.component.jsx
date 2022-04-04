import './nav-bar.style.scss';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div> Logo </div>
        </Link>
        <div className="links-container">
          <Link to="/shop" className="link"> Shop </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
