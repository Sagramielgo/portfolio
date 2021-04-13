/* import '../stylesheets/_header.scss'; */
import logo from '../../images/s-icon.png';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Sagra Mielgo</h1>
      </header>
    </div>
  );
}

export default Header;
