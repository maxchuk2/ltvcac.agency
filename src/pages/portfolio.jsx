import React from 'react';
import Hero from '../Components/Hero/Hero';
import Ticker from '../Components/Ticker/Ticker';
import HeroAdvantages from '../Components/HeroAdvantages/HeroAdvantages';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import { projects } from '../data/projects';

function portfolio({ hero }) {
  return (
    <>
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
