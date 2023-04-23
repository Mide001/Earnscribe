import logo from "../assets/Earnscribe..png";
import "./styles/Header.css";

function Header() {
  return (
    <div className={`container`}>
        <div className={`row`}>
        <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" style={{ height: "40px", width: "155px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className={`navbar-nav`}>
            <li className={`nav-item`}>
              <a className={`nav-link active`} href="/">
                What We Do
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link`} href="/">
                Write To Earn
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link`} href="/">
                Hire
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    </div>
  );
}

export default Header;
