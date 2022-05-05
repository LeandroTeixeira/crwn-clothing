import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryRoute from '../category/category-route.component';

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
}
