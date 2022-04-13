import { node } from 'prop-types';
import React, {
  createContext, useMemo, useState, useEffect,
} from 'react';
import globalData from './globalData';
import shopData from './shopData.json';
import { createUserDocumentFromAuth, onAuthStateChangeListener } from './firebase.utils';

export const GlobalContext = createContext('');

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const ShopContext = createContext({
  products: [],
});

// Provider used, combines all contexts into a single provider.
export function Provider({ children }) {
  // Data for User Context
  const [currentUser, setCurrentUser] = useState(null);
  // Definition of the auth listener and setting the unsubscribe function to run at unmount
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (user) => {
      if (user) { await createUserDocumentFromAuth(user); }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const userContextData = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser, setCurrentUser],
  );

  // Data for Global Context
  const globalContextData = useMemo(
    () => ({ ...globalData }),
    [globalData],
  );

  const shopContextData = useMemo(
    () => ({ products: shopData }),
    [shopData],
  );
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
