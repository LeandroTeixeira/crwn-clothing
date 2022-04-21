import React, { useContext } from 'react';
import './checkout.styles.scss';
import { GlobalContext } from '../../services/contexts';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const getTotalPrice = (cart) => cart.reduce((acc, current) => acc + current.qtd * current.price, 0);

export default function Checkout() {
  const {
    cartItems, addCartItem, removeCartItem, decreaseCartItem,
  } = useContext(GlobalContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        const { id } = item;
        return (
          <CheckoutItem
            key={id}
            cartItem={item}
            increase={() => addCartItem(item)}
            decrease={() => decreaseCartItem(item)}
            remove={() => removeCartItem(item)}
          />
        );
      })}
      <span className="total">
        Total :
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'USD',
        }).format(getTotalPrice(cartItems))}
      </span>
    </div>
  );
}
