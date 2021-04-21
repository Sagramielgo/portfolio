import '../../stylesSheet/landing/buttonSection.scss';
import { Link } from 'react-router-dom';

function ButtonSection() {
  return (
    <section className="btnSection">
      <div className="btnSection__button">
        <Link to="/about-me" className="btnLink">
          About me
        </Link>
      </div>
      <div className="btnSection__button">
        <Link to="/projects" className="btnLink">
          Projects
        </Link>
      </div>
    </section>
  );
}
export default ButtonSection;
