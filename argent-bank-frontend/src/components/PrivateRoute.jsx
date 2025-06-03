import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuthenticated } from "../features/auth/authSelectors";

export default function PrivateRoute({ children }) {
  // Verify if the user is connected
  const isAuthenticated = useSelector(getIsAuthenticated);

  // Redirects the user to the home page if not
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
