import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import Hero from '../Components/Hero/Hero';
import ProjectFull from '../Components/ProjectFull/ProjectFull';
import { Helmet } from 'react-helmet-async';

function Project() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  return (
    <>
      <Helmet>
        <title>{project.title} - LTV:CAC agency</title>,
        <meta
          name="description"
          content="We help startups and property businesses grow digital marketing from idea to xx.xxx customers with help digital channels, data analysis and customer research"
        />
      </Helmet>
      <Hero hero={project} />
      <ProjectFull project={project} />
    </>
  );
}

export default Project;
