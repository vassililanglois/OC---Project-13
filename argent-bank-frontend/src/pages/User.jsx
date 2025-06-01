import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account";
import {
  setFirstName,
  setLastName,
  setEmail,
} from "../features/user/userSlice";

import { getFirstName, getLastName } from "../features/user/userSelectors";
import { setToken } from "../features/auth/authSlice";

function User() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const firstName = useSelector(getFirstName);
  const lastName = useSelector(getLastName);

  const [editedFirstName, setEditedFirstName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const editName = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            firstName: editedFirstName,
            lastName: editedLastName,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok && data.body) {
        setUser(data.body);
      }
    };
    editName();
    setIsEditing(false);
    fetchProfile();
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const fetchProfile = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    dispatch(setToken(data.body.token));
    dispatch(setFirstName(data.body.firstName));
    dispatch(setLastName(data.body.lastName));
    dispatch(setEmail(data.body.email));
    if (response.ok && data.body) {
      setUser(data.body);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <main className="main bg-dark">
      <div className="user-header">
        <h1>Welcome back</h1>

        {!isEditing && user && (
          <>
            <h1>
              {firstName} {lastName}
              {(firstName || lastName) && " !"}
            </h1>
            <button className="edit-name-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </>
        )}

        {isEditing && (
          <form
            className="edit-form-container"
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveClick();
            }}
          >
            <div className="edit-user-info">
              <input
                type="text"
                id="firstname"
                className="edit-user-input"
                value={firstName}
                placeholder="Tony"
                pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
                title="Veuillez ne renseinger que des lettres"
                required
                onChange={(e) => setEditedFirstName(e.target.value)}
              />
              <input
                type="text"
                id="lastname"
                className="edit-user-input"
                value={lastName}
                placeholder="Jarvis"
                pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
                title="Veuillez ne renseinger que des lettres"
                required
                onChange={(e) => setEditedLastName(e.target.value)}
              />
            </div>
            <div className="edit-form-actions">
              <button className="edit-button" type="submit">
                Save
              </button>
              <button className="edit-button" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>
      <Account
        accountTitle="Argent Bank Checking (x8349)"
        accountAmount="$2,082.79"
        accountAmountDescription="Available Balance"
      />
      <Account
        accountTitle="Argent Bank Savings (x6712)"
        accountAmount="$10,928.42"
        accountAmountDescription="Available Balance"
      />
      <Account
        accountTitle="Argent Bank Credit Card (x8349)"
        accountAmount="$184.30"
        accountAmountDescription="Current Balance"
      />
    </main>
  );
}

export default User;
