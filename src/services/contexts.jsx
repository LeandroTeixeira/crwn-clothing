import { node } from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';
import globalData from './globalData';

export const GlobalContext = createContext('');

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export function Provider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
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
