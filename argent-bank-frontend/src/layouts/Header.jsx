import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isUserPage = location.pathname === "/profile";
  const isSignInPage = location.pathname === "/login";
  //const isTransactionsPage = location.pathname === '/transactions';

  return (
    <nav className="header">
      <Link className="header-logo" to="/">
        <img
          className="header-logo-image"
          src="./src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isHomePage || isSignInPage ? (
        <div>
          <Link className="header-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      ) : null}

      {isUserPage ? (
        <div className="header-item-container">
          <a className="header-item" href="#">
            <i className="fa fa-user-circle"></i>
            Tony
          </a>
          <a className="header-item" href="#">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      ) : null}
    </nav>
  );
}

export default Header;
