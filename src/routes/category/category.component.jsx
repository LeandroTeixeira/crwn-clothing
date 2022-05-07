import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CategoryTitle,
  CategoryRouteContainer,
} from './category.styles';
import { ShopContext } from '../../services/persistence/contexts';
import ProductCard from '../../components/product-card/product-card.component';

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(ShopContext);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryRouteContainer>
        {products
          && products.map((item) => <ProductCard key={item.id} product={item} />)}
      </CategoryRouteContainer>
    </div>
  );
}
