import React, { useContext } from 'react';
import { ShopContext } from '../../services/contexts';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.style.scss';

export default function Shop() {
  const { products } = useContext(ShopContext);
  return (
    <div className="products-container">
      {products.map((product) => (<ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
