import '../../stylesSheet/bio/aboutMe.scss';
import React from 'react';
function AboutMe() {
  return (
    <div>
      <h1 className="titleBio">About Me</h1>
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
