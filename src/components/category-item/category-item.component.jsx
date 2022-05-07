import React from 'react';
import { number, string, shape } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage, Body, CategoryContainer,
} from './category-item.styles';

export default function CategoryItem({ category: { id, imageUrl, title } }) {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(`/shop/${title}`);
  return (
    <CategoryContainer onClick={onNavigateHandler} key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
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
