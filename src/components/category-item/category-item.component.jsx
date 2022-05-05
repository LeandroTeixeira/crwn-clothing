import React from 'react';
import { number, string, shape } from 'prop-types';
import {
  BackgroundImage, Body, CategoryContainer,
} from './category-item.styles';

export default function CategoryItem({ category: { id, imageUrl, title } }) {
  return (
    <CategoryContainer to={`/shop/${title}`} key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
}

CategoryItem.propTypes = {
  category: shape({
    id: number,
    imageUrl: string,
    title: string,
  }),
}.isRequired;
