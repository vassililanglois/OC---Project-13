import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuthenticated } from "../features/auth/authSelectors";

export default function PublicRoute({ children }) {
  const isAuthenticated = useSelector(getIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}
