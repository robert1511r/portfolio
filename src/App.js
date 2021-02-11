import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import Hero from './modules/views/Hero';
import ProductValues from './modules/views/ProductValues';
import AboutMe from './modules/views/AboutMe';
import ProductCTA from './modules/views/ProductCTA';

function Index() {
  return (
    <React.Fragment>
      <Hero />
      <AboutMe />
      <ProductValues />
      <ProductCategories />
      <ProductCTA />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);