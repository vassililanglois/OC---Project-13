import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
