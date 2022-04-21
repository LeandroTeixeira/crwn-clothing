import './cart-item.styles.scss';
import React from 'react';

export default function CartItem({ cartItem }) {
  const { name, quantity } = cartItem;
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>

    </div>;
}
