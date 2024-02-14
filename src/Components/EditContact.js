import { useLocation, useNavigate } from "react-router-dom";
import { useContact } from "./ContactContext";
import { useState } from "react";

function EditContact() {
  const location = useLocation();
  const { id, name, email } = location.state;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const { updateContact } = useContact();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All the fields are mandatory");
    }
    updateContact({ id, name: newName, email: newEmail });
    setNewEmail("");
    setNewName("");
    navigate("/contactlist");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Contact</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <button>Update</button>
      </form>
    </div>
  );
}
export default EditContact;
