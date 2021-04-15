import '../../stylesSheet/bio/aboutMe.scss';
import '../../stylesSheet/landing/buttonSection.scss';
import Footer from '../Landing/Footer';
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
            Hi! I’m Sagra Mielgo, a junior front-end developer. I’ve just
            finished a boot camp at Adalab, a digital school for women. With
            effort and dedication I studied Philology, singing, music and
            theatre; my professional experience has been linked to music,
            communication, tv and radio. I have travelled around the world, I
            have worked in Japan, Argentina, UK and different Spanish cities. I
            am an inquisitive person, cultural diversity lover and passionate
            about comparative linguistics. I am self-taught in editing my own
            audio-visual material, my computer has been my travel partner. I am
            tenacious and committed, and a disciplined sports person. All these
            experiences helped me develop technical and managerial skills, such
            as: adaptability and empathy to understand the needs of each
            project. I overcame adversities with other people's help, that is
            why, at work and in my personal life, I believe in team work. I am
            taking off as a front-end developer with enthusiasm, knowing that as
            a Junior developer I have a lot to learn, but I have also a lot of
            energy and I'm looking forward to start working. Let's talk!
          </p>
        </article>
        <article className="articleBio articleBio2">
          <p className="text text2">
            Siempre quise ser cantante, maestra y astronauta. Con esfuerzo y
            dedicación me formé en Filología, canto, música y teatro; mi
            trayectoria profesional ha estado ligada a la música y comunicación,
            tv y radio. He viajado por todo el mundo, y trabajado en Japón,
            Argentina, Inglaterra y múltiples ciudades españolas. Curiosa y
            amante de la diversidad cultural y la lingüística comparada. De
            forma autodidacta comencé a editar mi propio material audiovisual,
            mi ordenador se convirtió en mi compañero de viaje. Soy tenaz y
            comprometida. Deportista disciplinada. Todas estas experiencias me
            han ayudado a desarrollar habilidades técnicas y de gestión, así
            como adaptabilidad y empatía para entender las necesidades de cada
            proyecto. He superado adversidades con ayuda de los demás, por eso,
            en el trabajo y en la vida, creo en el equipo. Soy consciente de
            que, como front-end developer, me queda mucho por aprender, pero
            despego con todo el entusiasmo del mundo. Houston, comienza la
            cuenta atrás.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default AboutMe;
