import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFirstName } from "../features/user/userSelectors";
import { getIsAuthenticated } from "../features/auth/authSelectors";
import { logout } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const firstName = useSelector(getFirstName);
  const isAuthenticated = useSelector(getIsAuthenticated);

  // Function to handle the logout click
  const handleLogOutClick = async () => {
    dispatch(logout());
    navigate("/");
  };

  // Function to handle the profile click
  const handleProfileClick = async () => {
    navigate("/profile");
  };

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

      {isAuthenticated === false ? (
        <div>
          <Link className="header-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      ) : null}

      {isAuthenticated === true ? (
        <div className="header-item-container">
          <button className="header-item" onClick={handleProfileClick}>
            <i className="fa fa-user-circle"></i>
            {firstName}
          </button>
          <button className="header-item" onClick={handleLogOutClick}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      ) : null}
    </nav>
  );
}

export default Header;
