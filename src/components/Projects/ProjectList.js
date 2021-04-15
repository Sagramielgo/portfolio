import ProjectCard from './ProjectCard.js';
import '../../stylesSheet/projects/projectList.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProjectList(props) {
  const [choose, setChoose] = useState('Take a look at my projects');
  const [colorTitle, setColorTitle] = useState('');

  const handleChoose = () => {
    setChoose('Click on Web or GitHub');
    setColorTitle('white');
    props.getShowColor();
  };
  const handleRemove = () => {
    setChoose('Take a look at my projects');
    setColorTitle('');
    props.getHideColor();
  };
  const projectList = props.projects.map((project) => {
    return (
      <li key={project.id}>
        <ProjectCard
          getChoose={handleChoose}
          getRemove={handleRemove}
          project={project}
        />
      </li>
    );
  });
  return (
    <>
      <h1 className={`title ${colorTitle}`}>{`${choose}`}</h1>
      <article className="articleProject">
        <ol className="articleProject__list">
          <li className="articleProject__list--item">
            <i className="fab fa-html5 articleProject__list--icon"></i>
          </li>
          <li className="articleProject__list--item">
            <i className="articleProject__list--icon fab fa-sass"></i>
          </li>
          <li className="articleProject__list--item">
            <i className="articleProject__list--icon fab fa-js-square"></i>
          </li>
          <li className="articleProject__list--item">
            <i className="articleProject__list--icon fab fa-react"></i>
          </li>
          <li className="articleProject__list--item">
            <i className="articleProject__list--icon fab fa-git-square"></i>
          </li>
          <li className="articleProject__list--item">
            <i className="articleProject__list--icon fab fa-node-js"></i>
          </li>
        </ol>
      </article>
      <ul className="listContainer">{projectList}</ul>
    </>
  );
}
ProjectList.propTypes = {
  Projects: PropTypes.object,
};
export default ProjectList;
