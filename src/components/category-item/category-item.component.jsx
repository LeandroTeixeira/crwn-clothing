import './category-item.styles.scss';
import React from 'react';
import { number, string, shape } from 'prop-types';

export default function CategoryItem({ category: { id, imageUrl, title } }) {
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  category: shape({
    id: number,
    imageUrl: string,
    title: string,
  }),
}.isRequired;
