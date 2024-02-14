import { useNavigate } from "react-router-dom";
import { useContact } from "./ContactContext";
import { useState } from "react";
import "../App.css";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addContactHandler } = useContact();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory");
    }
    addContactHandler({ name, email });
    setEmail("");
    setName("");
    navigate("/contactlist");
  }
  return (
    <div className="addContact">
      <form onSubmit={handleSubmit}>
        <h2>Add Contact</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="add-btn">Save</button>
      </form>
    </div>
  );
}
export default AddContact;
