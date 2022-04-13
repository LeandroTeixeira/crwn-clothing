import './nav-bar.styles.scss';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../services/contexts';
import { signOutUser } from '../../services/firebase.utils';

export default function NavBar() {
  const { currentUser } = useContext(UserContext);
  const handleSignOut = async () => {
    await signOutUser();
  };

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

          {currentUser ? (
            <Link to="/" className="nav-link" aria-hidden="true" onClick={handleSignOut}>
              SIGN OUT
            </Link>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
