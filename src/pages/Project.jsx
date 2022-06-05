import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import Hero from '../Components/Hero/Hero';
import ProjectFull from '../Components/ProjectFull/ProjectFull';

function Project() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  return (
    <>
      <Hero hero={project} />
      <ProjectFull project={project} />
    </>
  );
}

export default Project;
