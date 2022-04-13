import { node } from 'prop-types';
import React, {
  useMemo, useState, useEffect,
} from 'react';
import { GlobalContext, UserContext, ShopContext } from './contexts';
import globalData from './globalData';
import shopData from './shopData.json';
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from './firebase.utils';

// Data for User Context
let [currentUser, setCurrentUser] = [null, () => null];

const setUserContextData = () => ({
  currentUser,
  setCurrentUser,
});

// Data for Global Context
let [dropdownIsOpen, setDropdownIsOpen] = [false, () => null];
const toggleDropdown = () => {
  setDropdownIsOpen(!dropdownIsOpen);
};

const setGlobalContextData = () => ({
  ...globalData,
  dropdownIsOpen,
  setDropdownIsOpen,
  toggleDropdown,
});

// Data for Shop Context
let [products, setProducts] = [null, () => null];
const setShopContextData = () => ({
  products,
  setProducts,
});

// Definition of the AuthListener and Unsubscribe function
const AuthListener = async (user) => {
  if (user) await createUserDocumentFromAuth(user);
  setCurrentUser(user);
};

const setAuthListener = () => {
  const unsubscribe = onAuthStateChangeListener(AuthListener);
  return unsubscribe;
};

// Provider used, combines all contexts into a single provider.
export default function Provider({ children }) {
  // Setting the auth listener and configuring the unsubscribe function to run at unmount
  useEffect(setAuthListener, []);
  [currentUser, setCurrentUser] = useState(null);
  const userContextData = useMemo(
    setUserContextData,
    [currentUser, setCurrentUser],
  );
  // Data for Global Context
  [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const globalContextData = useMemo(
    setGlobalContextData,
    [globalData, dropdownIsOpen, setDropdownIsOpen, toggleDropdown],
  );

  // Data for Shop Context
  [products, setProducts] = useState(shopData);
  const shopContextData = useMemo(setShopContextData, [products, setProducts]);

  return (
    <UserContext.Provider value={userContextData}>
      <ShopContext.Provider value={shopContextData}>
        <GlobalContext.Provider value={globalContextData}>
          {children}
        </GlobalContext.Provider>
      </ShopContext.Provider>
    </UserContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
};
Provider.defaultProps = {
  children: '',
};
