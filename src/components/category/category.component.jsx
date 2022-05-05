import React from 'react';
import { arrayOf, object } from 'prop-types';
import CategoriesContainer from './category.styles';
import CategoryItem from '../category-item/category-item.component';

export default function Category({ categories }) {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}

Category.propTypes = {
  categories: arrayOf(object),
}.isRequired;
