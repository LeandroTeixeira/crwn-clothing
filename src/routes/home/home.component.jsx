import React, { useContext } from 'react';
import Category from '../../components/category/category.component';
import { GlobalContext } from '../../services/contexts';
import './home.styles.scss';

function Home() {
  const { categories } = useContext(GlobalContext);
  return (
    <Category categories={categories} />
  );
}

export default Home;
