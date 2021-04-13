import React from 'react';
/* import { Link } from 'react-router-dom'; */
/* import '../stylesheets/_landingPage.scss'; */
import Header from './Header';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="page-landing">
      <Header />
      <div className="main__button">
        {/*     <Link to="/card-generator" className="main__button--link">
          Comenzar
        </Link> */}
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
