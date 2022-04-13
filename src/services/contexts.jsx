import { createContext } from 'react';

export const GlobalContext = createContext('');

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const ShopContext = createContext({
  products: [],
});
