import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState, useEffect } from "react";

import css from "./App.module.css";

const SAVEDCONTACTS = "saved-contacts";

function filterContacts(contacts, filter) {
  const filteredContacts = [];
  contacts.map((contact) => {
    if (contact.name.toUpperCase().includes(filter.toUpperCase())) {
      filteredContacts.push(contact);
    }
  });
  return filteredContacts;
}

function readContacts() {
  const savedContacts = window.localStorage.getItem(SAVEDCONTACTS);

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }

  return [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
}

export default function App() {
  const [myContacts, setMyContacts] = useState(readContacts());

  function addContact(contact) {
    setMyContacts([...myContacts, contact]);
  }

  function deleteContact(contact) {
    const tmpContacts = [...myContacts];
    tmpContacts.splice(tmpContacts.indexOf(contact), 1);
    setMyContacts(tmpContacts);
  }

  useEffect(() =>
    window.localStorage.setItem(SAVEDCONTACTS, JSON.stringify(myContacts), [
      myContacts,
    ])
  );

  const [filter, setFilter] = useState("");

  return (
    <div className="container">
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={filterContacts(myContacts, filter)}
        deleteContact={deleteContact}
      />
    </div>
  );
}
