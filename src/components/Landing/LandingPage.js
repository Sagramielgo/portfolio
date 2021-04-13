import React from 'react';
/* import { Link } from 'react-router-dom'; */
import '../../stylesSheet/landing/landingPage.scss';
import Header from './Header';
import Footer from './Footer';
import ButtonSection from './ButtonSection';

const Landing = () => {
  return (
    <div className="page-landing">
      <Header />
      <main className="main">
        <h1 className="main__title"> Let's talk!</h1>

        <article className="article">
          <ol className="article__list">
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
            {/*    <li className="article__list--item">
              Youtube{' '}
              <i className="article__list--icon fab fa-youtube-square"></i>
            </li> */}
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
          </ol>
        </article>
        <ButtonSection />
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
