import React from 'react';
import '../../App.css';

import HomeSection1 from '../HomeSection1'
import HomeSection2 from '../HomeSection2'
import HomeSection from '../HomeSection'
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HomeSection2 />
      <HomeSection1 />
      <HomeSection />
      <Footer />
    </>
  );
}

export default Home;
