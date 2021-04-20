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
        <h1 className="main__title"> Demo Projects</h1>

        <nav className="article">
          <ul className="article__list">
            <li className="article__list--item">
              <a
                className="article__list--link"
                href="https://www.linkedin.com/in/sagramielgo/"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="article__list--icon fab fa-linkedin"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="article__list--item">
              <a
                className="article__list--link"
                href="https://twitter.com/Sagramielgo"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="article__list--icon fab fa-twitter-square"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="article__list--item">
              <a
                className="article__list--link"
                href="mailto:sagramielgo@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="article__list--icon fas fa-envelope-square"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="article__list--item">
              <a
                className="article__list--link"
                href="https://github.com/Sagramielgo"
                target="_blank"
                rel="noreferrer"
              >
                <i className="article__list--icon fab fa-github-square"></i>
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
