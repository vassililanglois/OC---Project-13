import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuthenticated } from "../features/auth/authSelectors";

export default function PrivateRoute({ children }) {
  const isAuthenticated = useSelector(getIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
