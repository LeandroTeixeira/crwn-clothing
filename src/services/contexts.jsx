import { node } from 'prop-types';
import React, {
  createContext, useMemo, useState, useEffect,
} from 'react';
import globalData from './globalData';
import { onAuthStateChangeListener } from './firebase.utils';

export const GlobalContext = createContext('');

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider used, combines all contexts into a single provider.
export function Provider({ children }) {
  // Data for User Context
  const [currentUser, setCurrentUser] = useState(null);
  // Definition of the auth listener and setting the unsubscribe function to run at unmount
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const globalContextData = useMemo(
    () => ({ ...globalData }),
    [globalData],
  );
  const userContextData = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser, setCurrentUser],
  );
  return (
    <GlobalContext.Provider value={globalContextData}>
      <UserContext.Provider value={userContextData}>
        {children}
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
