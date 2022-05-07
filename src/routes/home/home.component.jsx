import React, { useContext } from 'react';
import Footer from '../../components/footer/footer.component';
import HomeCategories from '../../components/home-categories/home-categories.component';
import { GlobalContext } from '../../services/persistence/contexts';

function Home() {
  const { categories } = useContext(GlobalContext);
  return (
    <>
      <HomeCategories categories={categories} />
      <Footer />
    </>
  );
}

export default Home;
