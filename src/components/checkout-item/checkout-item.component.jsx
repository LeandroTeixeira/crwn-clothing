import './checkout-item.styles.scss';
import React from 'react';
import {
  number, string, shape, func,
} from 'prop-types';

export default function CheckoutItem({
  cartItem: {
    name, imageUrl, price, qtd,
  }, remove, increase, decrease,
}) {
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={decrease}>&#10094;</button>
        <span className="value">
          {qtd}
        </span>
        <button className="arrow" onClick={increase}>&#10095;</button>
      </span>
      <span className="price">{price}</span>
      <button className="remove-button" onClick={remove}>
        {' '}
        &#10005;
      </button>
    </div>
  );
}

CheckoutItem.propTypes = {
  cartItem: shape({
    name: string,
    quantity: number,
    imageUrl: string,
    price: number,
  }),
  remove: func,
  increase: func,
  decrease: func,
}.isRequired;
