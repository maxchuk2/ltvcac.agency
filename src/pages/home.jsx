import React from 'react';
import Hero from '../Components/Hero/Hero';
import Ticker from '../Components/Ticker/Ticker';

function Home({ hero }) {
  return (
    <>
      <Hero hero={hero} />
      <Ticker />
    </>
  );
}

export default Home;
