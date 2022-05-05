import React, { useContext } from 'react';
import { ShopContext } from '../../services/contexts';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

export default function Shop() {
  const { categoriesMap } = useContext(ShopContext);
  const products = [];
  Object.keys(categoriesMap).forEach(
    (title) => products.push(...categoriesMap[title]),
  );
  return (
    <div className="products-container">
      {products.map((product) => (<ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
