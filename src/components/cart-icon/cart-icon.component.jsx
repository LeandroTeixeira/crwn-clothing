/* eslint-disable jsx-a11y/no-static-element-interactions */
import './cart-icon.styles.scss';
import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { GlobalContext } from '../../services/contexts';

export default function CartIcon() {
  const { toggleDropdown } = useContext(GlobalContext);
  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') toggleDropdown();
  };
  return (
    <div
      tabIndex="-1"
      className="cart-icon-container"
      onKeyPress={handleKeyPress}
      onClick={toggleDropdown}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
