import React from 'react';
import { number, string, shape } from 'prop-types';
import {
  BackgroundImage, Body, CategoryContainer,
} from './category-item.styles';

export default function CategoryItem({ category: { id, imageUrl, title } }) {
  return (
    <CategoryContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body
        className="category-body-container"
        to={`/shop/${title}`}
      >
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
