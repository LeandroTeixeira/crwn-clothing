import './product-card.styles.scss';
import React, { useContext } from 'react';
import { string } from 'prop-types';
import Button from '../button/button.component';
import { GlobalContext } from '../../services/contexts';
import { currencyFormatter } from '../../services/utils';

export default function ProductCard({
  product: {
    id, name, price, imageUrl,
  },
}) {
  const { addCartItem } = useContext(GlobalContext);
  const add = () => {
    addCartItem({
      id, name, price, imageUrl,
    });
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">
          {currencyFormatter(price)}
        </span>
      </div>
      <Button buttonType="Inverted" onClick={add}>Add to Cart</Button>
    </div>
  );
}

ProductCard.propTypes = {
  name: string,
  imageUrl: string,
  price: string,
}.isRequired;
