import { useState } from "react";
import { useSelector } from "react-redux";
import { getFirstName, getLastName } from "../features/user/userSelectors";
import useUserProfile from "../hooks/useUserProfile";
import Account from "../components/Account";
import EditUserForm from "../components/EditUserForm";

function User() {
  const { fetchProfile, updateProfile } = useUserProfile();

  const [isEditing, setIsEditing] = useState(false);

  const firstName = useSelector(getFirstName);
  const lastName = useSelector(getLastName);

  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => setIsEditing(false);

  const handleSave = async (editedFirstName, editedLastName) => {
    await updateProfile(editedFirstName, editedLastName);
    setIsEditing(false);
    fetchProfile();
  };

  return (
    <main className="main bg-dark">
      <div className="user-header">
        <h1>Welcome back</h1>
        {!isEditing && (
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
          <EditUserForm
            firstName={firstName}
            lastName={lastName}
            onSave={handleSave}
            onCancel={handleCancelClick}
          />
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
