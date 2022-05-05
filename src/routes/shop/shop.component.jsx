import React, { Fragment, useContext } from 'react';
import { ShopContext } from '../../services/contexts';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';
import CategoryPreview from '../../components/category-preview/category-preview.component';

export default function Shop() {
  const { categoriesMap } = useContext(ShopContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            title={title}
            products={products}
            key={title}
          />
        );
      })}
    </div>
  );
}
