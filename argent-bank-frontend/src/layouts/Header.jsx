function Header() {
  return (
    <nav className="header">
      <a className="header-logo" href="#">
        <img
          className="header-logo-image"
          src="./src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="header-item" href="#">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default Header;
