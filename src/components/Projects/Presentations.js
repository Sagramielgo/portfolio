function Presentations() {
  return (
    <>
      <h1 className="main__title"> Presentations</h1>

      <nav className="article videoNav">
        <ul className="article__list">
          <li className="article__list--item">
            devRockets
            <a
              className="article__list--link"
              href="https://www.youtube.com/watch?v=pdzEJnlMqdA"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="article__list--icon fas fa-rocket"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li className="article__list--item">
            React Magicians
            <a
              className="article__list--link"
              href="https://www.youtube.com/watch?v=Qvc12u0rrAc"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="article__list--icon fas fas fa-tree"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li className="article__list--item">
            This is Me
            <a
              className="article__list--link"
              href="https://www.youtube.com/watch?v=SfTgr9eAIKc/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="article__list--icon fas fa-tv"
                aria-hidden="true"
              ></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Presentations;
