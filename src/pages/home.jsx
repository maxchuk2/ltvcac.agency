import React from 'react';
import Hero from '../Components/Hero/Hero';
import Ticker from '../Components/Ticker/Ticker';
import ClientFocus from '../Components/ClientFocus/ClientFocus';
import HeroAdvantages from '../Components/HeroAdvantages/HeroAdvantages';
import WhatWeWorked from '../Components/WhatWeWorked/WhatWeWorked';
import WhereWeShine from '../Components/WhereWeShine/WhereWeShine';
import OurToolkit from '../Components/OurToolkit/OurToolkit';
import HowItWorks from '../Components/HowItWorks/HowItWorks';
import LetsTalk from '../Components/LetsTalk/LetsTalk';

function Home({ hero }) {
  return (
    <>
      <Hero hero={hero} />
      <Ticker />
      <HeroAdvantages />
      <ClientFocus />

      <div className="pt-60 pb-80 pt-xl-190 pb-xl-190">
        <div className="container ph-20">
          <div className="row">
            <div className="col-12 col-xl-8 m-auto">
              <h2 className="section__title section__title--primary mb-30">
                ROI&#62;0 if LTV&#62;CAC
              </h2>
              <p className="section__text ta-left ta-md-center">
                During the past decade we&nbsp;have worked on &gt; 90&nbsp;projects
                in&nbsp;industries like SaaS, Ecommerce, Online Gaming etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhatWeWorked />

      <div className="mb-80 mb-md-0 pt-xl-190 pb-xl-190">
        <div className="container ph-20">
          <div className="row">
            <div className="col-12 col-xl-8 m-auto">
              <p className="section__text ta-left ta-md-center">
                We drive customers and paying users to your products with market research and
                digital channels optimization. You boost your revenue, and we get our share of it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhereWeShine />
      <OurToolkit />
      <HowItWorks />
      <LetsTalk />
    </>
  );
}

export default Home;
