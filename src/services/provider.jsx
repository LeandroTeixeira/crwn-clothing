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
const setGlobalContextData = () => ({ ...globalData });

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
  const globalContextData = useMemo(setGlobalContextData, [globalData]);

  // Data for Shop Context
  [products, setProducts] = useState(shopData);
  const shopContextData = useMemo(setShopContextData, [products, setProducts]);

  return (
    <GlobalContext.Provider value={globalContextData}>
      <UserContext.Provider value={userContextData}>
        <ShopContext.Provider value={shopContextData}>
          {children}
        </ShopContext.Provider>
      </UserContext.Provider>
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
};
Provider.defaultProps = {
  children: '',
};
