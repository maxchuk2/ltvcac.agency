import React from 'react';
import Hero from '../Components/Hero/Hero';
import Ticker from '../Components/Ticker/Ticker';
import HeroAdvantages from '../Components/HeroAdvantages/HeroAdvantages';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import { projects } from '../data/projects';
import { Helmet } from 'react-helmet-async';

function portfolio({ hero }) {
  return (
    <>
      <Helmet>
        <title>Our cases- LTV:CAC agency</title>,
        <meta
          name="description"
          content="We help startups and property businesses grow digital marketing from idea to xx.xxx customers with help digital channels, data analysis and customer research"
        />
      </Helmet>
      <Hero hero={hero} />
      <Ticker />
      <HeroAdvantages />
      <div className="portfolio-grid">
        <div className="container p-0">
          <div className="row">
            {projects.map((obj) => (
              <ProjectCard
                key={obj.id}
                id={obj.id}
                title={obj.title}
                subtitle={obj.subtitle}
                tags={obj.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default portfolio;
