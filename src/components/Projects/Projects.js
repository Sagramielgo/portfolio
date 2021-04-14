import '../../stylesSheet/projects/projects.scss';
import data from '../../store/data.json';
import ProjectList from './ProjectList.js';
import Footer from '../Landing/Footer';
import React, { useState } from 'react';

function Projects() {
  const [state] = useState(data);
  const [colorData, setColorData] = useState('');
  function handleShowColor() {
    setColorData('bgColor');
  }

  function handleRemoveColor() {
    setColorData('');
  }
  return (
    <div className={`container ${colorData}`}>
      <ProjectList
        projects={state}
        getShowColor={handleShowColor}
        getHideColor={handleRemoveColor}
      />
      <Footer />
    </div>
  );
}

export default Projects;
