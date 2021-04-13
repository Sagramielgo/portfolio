import '../../stylesSheet/landing/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer_link"
        href="https://github.com/Sagramielgo"
        target="_blank"
        rel="noreferrer"
      >
        <small className="copy">
          By #gitFuntastic&nbsp;
          <span>
            <i className="fas fa-paw "></i>
          </span>
          &nbsp;2021
        </small>
      </a>
    </footer>
  );
}
export default Footer;
