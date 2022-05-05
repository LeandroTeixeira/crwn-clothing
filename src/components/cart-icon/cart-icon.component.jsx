/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { GlobalContext } from '../../services/contexts';
import { CartIconContainer, ItemCount, ShoppingIconComponent } from './cart-icon.styles';

export default function CartIcon() {
  const { toggleDropdown, cartItems } = useContext(GlobalContext);
  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') toggleDropdown();
  };
  return (
    <CartIconContainer
      tabIndex="-1"
      onKeyPress={handleKeyPress}
      onClick={toggleDropdown}
    >
      <ShoppingIconComponent />
      <ItemCount>
        {cartItems.reduce((acc, current) => acc + current.qtd, 0)}
      </ItemCount>
    </CartIconContainer>
  );
}
