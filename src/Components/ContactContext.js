import { createContext, useContext, useState } from "react";
import axios from "axios";

const contactContext = createContext();

function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  async function retreiveContacts() {
    const response = await axios.get("http://localhost:5006/contacts");
    console.log(response);
    if (response.data) {
      setContacts(response.data);
    }
  }

  async function addContactHandler(contact) {
    console.log(contact);
    const request = { id: `${"name"}-${Date.now()}`, ...contact };

    const response = await axios.post(
      "http://localhost:5006/contacts",
      request
    );
    setContacts([...contacts, response.data]);
  }
  async function updateContact(contact) {
    const response = await axios.put(
      `http://localhost:5006/contacts/${contact.id}`,
      contact
    );
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  }

  async function deleteContactHandler(id) {
    await axios.delete(`http://localhost:5006/contacts/${id}`);
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  }
  return (
    <contactContext.Provider
      value={{
        addContactHandler,
        retreiveContacts,
        contacts,
        deleteContactHandler,
        updateContact,
      }}
    >
      {children}
    </contactContext.Provider>
  );
}

function useContact() {
  return useContext(contactContext);
}

export { ContactProvider, useContact };
