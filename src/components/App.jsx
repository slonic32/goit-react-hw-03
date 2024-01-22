import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";

import css from "./App.module.css";

function filterContacts(contacts, filter) {
  const filteredContacts = [];
  contacts.map((contact) => {
    if (contact.name.toUpperCase().includes(filter.toUpperCase())) {
      filteredContacts.push(contact);
    }
  });
  return filteredContacts;
}

export default function App() {
  const [myContacts, setMyContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  function addContact(contact) {
    setMyContacts([...myContacts, contact]);
  }

  const [filter, setFilter] = useState("");

  return (
    <div className={css.app}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filterContacts(myContacts, filter)} />
    </div>
  );
}
