import { useState } from "react";

export default function EditUserForm({
  firstName,
  lastName,
  onSave,
  onCancel,
}) {
  const [editedFirstName, setEditedFirstName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);

  return (
    <form
      className="edit-form-container"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(editedFirstName, editedLastName);
      }}
    >
      <div className="edit-user-info">
        <input
          type="text"
          className="edit-user-input"
          value={editedFirstName}
          onChange={(e) => setEditedFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          className="edit-user-input"
          value={editedLastName}
          onChange={(e) => setEditedLastName(e.target.value)}
          required
        />
      </div>
      <div className="edit-form-actions">
        <button className="edit-button" type="submit">
          Save
        </button>
        <button className="edit-button" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
