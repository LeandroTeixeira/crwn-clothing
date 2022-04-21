/* eslint-disable react/prop-types */
import './cart-item.styles.scss';
import React, { useContext } from 'react';
import { GlobalContext } from '../../services/contexts';

export default function CartItem({ item }) {
  const {
    addCartItem, decreaseCartItem, removeCartItem,
  } = useContext(GlobalContext);
  const {
    name, qtd, imageUrl, price,
  } = item;
  const add = () => { addCartItem(item); };
  const sub = () => { decreaseCartItem(item); };
  const del = () => { removeCartItem(item); };
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          <button onClick={sub} className="sub">
            -
          </button>
          {qtd}
          <button onClick={add} className="add">
            +
          </button>
          $
          {price}
        </span>
        {/*
         */}
      </div>
      <button onClick={del} className="del">
        &#10006;
      </button>
    </div>
  );
}
