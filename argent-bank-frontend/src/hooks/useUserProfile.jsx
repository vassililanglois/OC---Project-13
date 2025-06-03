import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
} from "../features/user/userSlice";
import { setToken } from "../features/auth/authSlice";

export default function useUserProfile() {
  const dispatch = useDispatch();

  const fetchProfile = useCallback(async () => {
    // Get the token in the localSotrage
    const token = localStorage.getItem("token");

    // Not doing anything if there's no token in
    if (!token) return;

    // Fetch the API to get user's infos
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    // Dispatches to modify user's infos
    dispatch(setFirstName(data.body.firstName));
    dispatch(setLastName(data.body.lastName));
    dispatch(setEmail(data.body.email));
  }, [dispatch]);

  const updateProfile = async (firstName, lastName) => {
    // Get the token in the localSotrage
    const token = localStorage.getItem("token");

    // Not doing anything if there's no token in
    if (!token) return;

    // Fetch the API to modify user's infos
    await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });
  };

  // Automatically fetch profile when token is present
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken(token));
      fetchProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { fetchProfile, updateProfile };
}
