import './category.styles.scss';
import React from 'react';
import { arrayOf, object } from 'prop-types';
import CategoryItem from '../category-item/category-item.component';

export default function Category({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

Category.propTypes = {
  categories: arrayOf(object),
}.isRequired;
