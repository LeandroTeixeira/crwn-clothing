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
const [currentUser, setCurrentUser] = useState(null);

const setUserContextData = () => ({
  currentUser,
  setCurrentUser,
});

// Data for Global Context
const setGlobalContextData = () => ({ ...globalData });

// Data for Shop Context
const setShopContextData = () => ({ products: shopData });

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

  const userContextData = useMemo(
    setUserContextData,
    [currentUser, setCurrentUser],
  );

  // Data for Global Context
  const globalContextData = useMemo(setGlobalContextData, [globalData]);

  // Data for Shop Context
  const shopContextData = useMemo(setShopContextData, [shopData]);
  return (
    <GlobalContext.Provider value={globalContextData}>
      <ShopContext.Provider value={shopContextData}>
        <UserContext.Provider value={userContextData}>
          {children}
        </UserContext.Provider>
      </ShopContext.Provider>
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
};
Provider.defaultProps = {
  children: '',
};
