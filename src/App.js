import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Projects from './modules/views/Projects';
import Footer from './modules/views/Footer';
import Hero from './modules/views/Hero';
import Qualities from './modules/views/Qualities';
import AboutMe from './modules/views/AboutMe';
import ContactForm from './modules/views/ContactForm';

function Index() {
  return (
    <React.Fragment>
      <Hero />
      <AboutMe />
      <Qualities />
      <Projects />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);