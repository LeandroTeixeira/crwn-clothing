import './category-item.styles.scss';
import React from 'react';
import { number, string, shape } from 'prop-types';
import { Link } from 'react-router-dom';

export default function CategoryItem({ category: { id, imageUrl, title } }) {
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link className="category-body-container" to={`/shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Link>
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
