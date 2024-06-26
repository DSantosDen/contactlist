import React from "react";

export default function ContactRow({ contact, onClick }) {
  return (
    <tr onClick={() => onClick(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
