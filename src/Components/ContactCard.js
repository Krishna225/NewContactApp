import { useContact } from "./ContactContext";
import user from "../images/user.png";
import { Link } from "react-router-dom";

function ContactCard({ contact }) {
  const { id, name, email } = contact;
  const { deleteContactHandler } = useContact();
  return (
    <div>
      <img src={user} alt="user" />
      <Link to={`/contact/${id}`} state={{ id, name, email }}>
        <div>{name}</div>
        <div>{email}</div>
      </Link>
      <button onClick={() => deleteContactHandler(id)}>Delete</button>
      <Link to="/edit" state={{ id, name, email }}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default ContactCard;
