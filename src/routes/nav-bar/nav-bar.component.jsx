import './nav-bar.style.scss';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../services/contexts';

export default function NavBar() {
  const { currentUser } = useContext(UserContext);
  if (currentUser)console.log(currentUser);
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/auth" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
