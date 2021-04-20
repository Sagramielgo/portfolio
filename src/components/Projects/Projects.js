import '../../stylesSheet/projects/projects.scss';
import data from '../../store/data.json';
import ProjectList from './ProjectList.js';
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
        <h1 className="main__title"> Presentations</h1>

        <nav className="article videoNav">
          <ul className="article__list">
            <li className="article__list--item">
              devRockets
              <a
                className="article__list--link"
                href="https://www.youtube.com/watch?v=pdzEJnlMqdA"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="article__list--icon fas fa-rocket"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="article__list--item">
              React Magicians
              <a
                className="article__list--link"
                href="https://www.youtube.com/watch?v=Qvc12u0rrAc"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="article__list--icon fas fas fa-tree"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="article__list--item">
              This is Me
              <a
                className="article__list--link"
                href="https://www.youtube.com/watch?v=SfTgr9eAIKc/"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="article__list--icon fas fa-tv"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          </ul>
        </nav>
        <div className="btnSection__button btnProjects">
          <Link to="/" className="main__button--link">
            Home
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
