import { createContext } from 'react';

export const GlobalContext = createContext({
  categories: [],
  cartItems: [],
  dropdownIsOpen: false,
  setDropdownIsOpen: () => null,
  toggleDropdown: () => null,
  addCartItem: () => null,
  decreaseCartItem: () => null,
  removeCartItem: () => null,
});

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const ShopContext = createContext({
  products: [],
  setProducts: () => null,
});
