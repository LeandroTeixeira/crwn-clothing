import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title>
          <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

CategoryPreview.propTypes = {
  title: string,
  products: arrayOf(object),
}.isRequired;
