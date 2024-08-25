import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, clickHandler }) => {
  console.log(contacts);

  return (
    <div>
      {contacts && contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickHandler={clickHandler}
          />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};

export default ContactList;
