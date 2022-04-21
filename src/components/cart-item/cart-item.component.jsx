/* eslint-disable react/prop-types */
import './cart-item.styles.scss';
import React, { useContext } from 'react';
import { GlobalContext } from '../../services/contexts';

export default function CartItem({ item }) {
  const {
    addCartItem, decreaseCartItem, removeCartItem,
  } = useContext(GlobalContext);
  const { name, qtd } = item;
  const add = () => { addCartItem(item); };
  const sub = () => { decreaseCartItem(item); };
  const del = () => { removeCartItem(item); };
  return (
    <div className="cart-item-container">
      <h2>
        {name}
      </h2>

      <h2>
        QTD:
        {' '}
        {qtd}
      </h2>
      <button onClick={add}>increase</button>
      <button onClick={sub}>decrease</button>
      <button onClick={del}>remove</button>
    </div>
  );
}
