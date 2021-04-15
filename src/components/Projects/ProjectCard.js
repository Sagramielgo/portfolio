import '../../stylesSheet/projects/projectCard.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProjectCard(props) {
  /* select favourites */
  const [card, setCard] = useState('');
  function handleFav() {
    !card ? setCard('blue') : setCard('');
  }

  const getFav = () => {
    props.getChoose();
  };
  const getNone = () => {
    props.getRemove();
  };
  return (
    <article
      className={`projectCard ${card}`}
      onClick={handleFav}
      onMouseOver={getFav}
      onMouseOut={getNone}
    >
      <h2 className="projectCard__name">{props.project.name}</h2>
      <img
        className="projectCard__image"
        src={require(`../../images/imgProjects/${props.project.url}`).default}
        alt={props.project.name}
      />

      <ul className="projectCard__contact">
        <li className="projectCard__contact--item">
          <a
            className="projectCard__contact--link"
            href={props.project.demo.web}
            target="_blank"
            rel="noreferrer"
          >
            <i className=" projectCard__contact--icon fas fa-link"></i>
            Web
          </a>
        </li>
        <li className="projectCard__contact--item">
          <a
            className="projectCard__contact--link"
            href={props.project.demo.repo}
            target="_blank"
            rel="noreferrer"
          >
            <i className="projectCard__contact--icon fas fa-link"></i>
            GitHub
          </a>
        </li>
      </ul>
    </article>
  );
}
ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
export default ProjectCard;
