import React from 'react';
import { arrayOf, object } from 'prop-types';
import CategoriesContainer from './home-categories.styles';
import HomeCategoryItem from '../home-category-item/home-category-item.component';

export default function HomeCategories({ categories }) {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <HomeCategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}

HomeCategories.propTypes = {
  categories: arrayOf(object),
}.isRequired;
