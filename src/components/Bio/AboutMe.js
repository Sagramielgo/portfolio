import '../../stylesSheet/bio/aboutMe.scss';
import '../../stylesSheet/landing/buttonSection.scss';
import { Link } from 'react-router-dom';
import React from 'react';
function AboutMe() {
  return (
    <div className="bioContainer">
      <h1 className="titleBio">About Me</h1>
      <div className="btnSection__button">
        <Link to="/" className="main__button--link">
          Home
        </Link>
      </div>
      <main className="mainContainer">
        <article className="articleBio articleBio1">
          <p className="text text1">
            Lorem Impsum bbbbbbbbbb bbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbb
            bbbbbbbb
          </p>
        </article>
        <article className="articleBio articleBio2">
          <p className="text text2">
            Lorem Impsum bbbbbbbbbb bbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbb
            bbbbbbbb
          </p>
        </article>
      </main>
    </div>
  );
}

export default AboutMe;
