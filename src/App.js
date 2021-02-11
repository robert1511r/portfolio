import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import Hero from './modules/views/Hero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';

function Index() {
  return (
    <React.Fragment>
      <Hero />
      <ProductHowItWorks />
      <ProductValues />
      <ProductCategories />
      <ProductCTA />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);