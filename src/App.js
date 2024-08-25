import "./App.css";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import ContactManager from "./ContactManager";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <ContactManager addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} clickHandler={removeContactHandler} />
    </div>
  );
}

export default App;
