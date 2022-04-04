import React from 'react';
import Category from '../../components/category/category.component';
import AppContext from '../../services/context';

function Home() {
  return (
    <AppContext.Consumer>
      {({ categories }) => <Category categories={categories} />}
    </AppContext.Consumer>
  );
}

export default Home;
