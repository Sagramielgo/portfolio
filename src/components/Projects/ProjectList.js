import ProjectCard from './ProjectCard.js';
import '../../stylesSheet/projects/projectList.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProjectList(props) {
  const [choose, setChoose] = useState('Some of my projects');
  const [colorTitle, setColorTitle] = useState('');

  const handleChoose = () => {
    setChoose('HAZ CLICK EN TU FAVORITO');
    setColorTitle('white');
    props.getShowColor();
  };
  const handleRemove = () => {
    setChoose('Some of my projects');
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
      <ul className="listContainer">{projectList}</ul>
    </>
  );
}
ProjectList.propTypes = {
  Projects: PropTypes.object,
};
export default ProjectList;
