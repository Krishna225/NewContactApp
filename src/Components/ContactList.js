import { useContact } from "./ContactContext";
import ContactCard from "./ContactCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ContactList() {
  const { contacts, retreiveContacts } = useContact();

  useEffect(() => {
    retreiveContacts();
  }, []);
  const renderList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return (
    <div>
      <Link to="/add">
        <button>Add Contact</button>
      </Link>
      <h2> Contact List </h2>

      <div>{renderList}</div>
    </div>
  );
}

export default ContactList;
