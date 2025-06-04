import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setToken } from "./features/auth/authSlice";

import Header from "./layouts/Header";
import Router from "./Router";
import Footer from "./layouts/Footer";
import useUserProfile from "./hooks/useUserProfile";

export default function App() {
  const dispatch = useDispatch();

  const { fetchProfile } = useUserProfile();
  // Automatically fetch profile when token is present
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken(token));
      fetchProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
