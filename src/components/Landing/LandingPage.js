import React from 'react';
/* import { Link } from 'react-router-dom'; */
import '../../stylesSheet/landing/landingPage.scss';
import Header from './Header';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="page-landing">
      <Header />
      <main className="main central-column">
        <h1 className="main__title"> Sagra Mielgo</h1>
        {/*  <div className="transparent-container"> */}
        <article className="article">
          <ol className="article__list">
            <li className="article__list--item">
              Linkedin
              <i
                className="article__list--icon fa fa-object-ungroup"
                aria-hidden="true"
              ></i>{' '}
            </li>
            <li className="article__list--item">
              Twitter{' '}
              <i
                className="article__list--icon fa fa-keyboard-o"
                aria-hidden="true"
              ></i>
            </li>
            <li className="article__list--item">
              Youtube
              <i
                className="article__list--icon  fa fa-share-alt"
                aria-hidden="true"
              ></i>
            </li>
          </ol>
        </article>
        {/*  </div> */}

        <div className="main__button">
          {/*  <Link to="/card-generator" className="main__button--link"> */}
          Proyectos
          {/*   </Link> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
