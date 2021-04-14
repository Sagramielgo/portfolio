import '../../stylesSheet/landing/buttonSection.scss';
import { Link } from 'react-router-dom';

function ButtonSection() {
  return (
    <section className="btnSection">
      <div className="btnSection__button">
        {/*  <Link to="/card-generator" className="main__button--link"> */}
        About me
        {/*   </Link> */}
      </div>
      <div className="btnSection__button">
        <Link to="/projects" className="main__button--link">
          Proyectos
        </Link>
      </div>
    </section>
  );
}
export default ButtonSection;
