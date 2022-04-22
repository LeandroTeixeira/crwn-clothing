import React, { useContext } from 'react';
import './checkout.styles.scss';
import { GlobalContext } from '../../services/contexts';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { currencyFormatter } from '../../services/utils';

export default function Checkout() {
  const {
    cartItems, total, addCartItem, removeCartItem, decreaseCartItem,
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
        {currencyFormatter(total)}
      </span>
    </div>
  );
}
