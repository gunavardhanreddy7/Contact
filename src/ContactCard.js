import React from "react";

const ContactCard = ({ key, contact, clickHandler }) => {
  const { id, name, email } = contact;
  return (
    <div>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>

      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => clickHandler(id)}
        aria-label={`Delete contact ${name}`}
        role="button"
      ></i>
    </div>
  );
};

export default ContactCard;
