import React, { useContext } from 'react';
import { ShopContext } from '../../services/contexts';

export default function Shop() {
  const { products } = useContext(ShopContext);
  return (
    <>
      <h1>Shop</h1>
      {products.map(({
        id, name, price, imageUrl,
      }) => (
        <div key={id}>
          <h2>{name}</h2>
          <img src={imageUrl} alt="product" />
          <p>
            Price:
            {price}
          </p>
        </div>
      ))}
    </>
  );
}
