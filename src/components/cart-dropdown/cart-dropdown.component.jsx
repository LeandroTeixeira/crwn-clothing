import React, { useContext, useEffect, useState } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { GlobalContext } from '../../services/contexts';

const getTotalPrice = (cart) => cart.reduce((acc, current) => acc + current.qtd * current.price, 0);

export default function CartDropdown() {
  const {
    cartItems,

  } = useContext(GlobalContext);
  const [total, setTotal] = useState(getTotalPrice(cartItems));
  useEffect(() => {
    setTotal(getTotalPrice(cartItems));
  }, [cartItems]);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {[...cartItems].map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
      <h2>
        Total :
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'USD',
        }).format(total) }
      </h2>
      <Button buttonType="default">GO TO CHECKOUT</Button>
    </div>
  );
}
