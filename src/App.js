import "./App.css";
import AddContact from "./Components/Add Contact";
import { ContactProvider } from "./Components/ContactContext";
import ContactList from "./Components/ContactList";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import EditContact from "./Components/EditContact";
import ContactDetail from "./Components/ContactDetail";

function App() {
  return (
    <ContactProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/contactlist" element={<ContactList />} />
          <Route path="/edit" element={<EditContact />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </div>
    </ContactProvider>
  );
}

export default App;
