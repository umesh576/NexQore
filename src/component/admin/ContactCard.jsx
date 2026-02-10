import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Purpose:</strong> {contact.purpose}
      </p>
      <p>
        <strong>Message:</strong> {contact.message}
      </p>
    </div>
  );
};

export default ContactCard;
