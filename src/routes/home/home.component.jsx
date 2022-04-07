import React, { useContext } from 'react';
import Category from '../../components/category/category.component';
import { GlobalContext } from '../../services/contexts';

function Home() {
  const { categories } = useContext(GlobalContext);
  return (
    <Category categories={categories} />
  );
}

export default Home;
