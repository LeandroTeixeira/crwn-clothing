import './category-route.styles.scss';
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../services/contexts';
import ProductCard from '../../components/product-card/product-card.component';

export default function CategoryRoute() {
  const { category } = useParams();
  const { categoriesMap } = useContext(ShopContext);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div>
      <h2>{category}</h2>
      <div className="category-route-container">
        {products && products.map((item) => <ProductCard key={item.id} product={item} />)}
      </div>
    </div>
  );
}
