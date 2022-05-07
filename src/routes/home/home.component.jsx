import React, { useContext } from 'react';
import HomeCategories from '../../components/home-categories/home-categories.component';
import { GlobalContext } from '../../services/persistence/contexts';

function Home() {
  const { categories } = useContext(GlobalContext);
  return (
    <HomeCategories categories={categories} />
  );
}

export default Home;
