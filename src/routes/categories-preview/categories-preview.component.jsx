import React, { Fragment, useContext } from 'react';
import { ShopContext } from '../../services/contexts';
import CategoryPreview from '../../components/category-preview/category-preview.component';

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(ShopContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview title={title} products={products} key={title} />
        );
      })}
    </>
  );
}
