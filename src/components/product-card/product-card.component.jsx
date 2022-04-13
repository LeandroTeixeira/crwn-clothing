import './product-card.style.scss';
import React from 'react';
import { string } from 'prop-types';
import Button from '../button/button.component';

export default function ProductCard({ product: { name, price, imageUrl } }) {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'USD',
          }).format(price)}
        </span>
      </div>
      <Button buttonType="Inverted">Add to Cart</Button>
    </div>
  );
}

ProductCard.propTypes = {
  name: string,
  imageUrl: string,
  price: string,
}.isRequired;
