import './category-preview.styles.scss';
import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">
          <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

CategoryPreview.propTypes = {
  title: string,
  products: arrayOf(object),
}.isRequired;
