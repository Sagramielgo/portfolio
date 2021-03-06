import '../../stylesSheet/projects/projects.scss';
import data from '../../store/data.json';
import ProjectList from './ProjectList.js';
import Presentations from './Presentations.js';
import Footer from '../Landing/Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <>
      <div className="container">
        <main className={`container__main ${colorData}`}>
          <ProjectList
            projects={state}
            getShowColor={handleShowColor}
            getHideColor={handleRemoveColor}
          />
        </main>
        <Presentations />
        <div className="btnSection__button btnProjects">
          <Link to="/" className="btnLink">
            Home
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
