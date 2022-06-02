import React from 'react';
import Hero from '../Components/Hero/Hero';
import Ticker from '../Components/Ticker/Ticker';
import HeroAdvantages from '../Components/HeroAdvantages copy/HeroAdvantages';
import LetsTalk from '../Components/LetsTalk/LetsTalk';

function Home({ hero }) {
  return (
    <>
      <Hero hero={hero} />
      <Ticker />
      <HeroAdvantages />

      <LetsTalk />
    </>
  );
}

export default Home;
