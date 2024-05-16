import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

/* Dummy data for testing 
const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
]; */

export default function ContactList() {
  const [contacts, setContacts] = useState([]);// Empty state
  const [selectedContactId, setSelectedContactId] = useState(null); // Const to hold the selected row item
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  const handleSelectContact = (id) => {
    setSelectedContactId(id);
  };

  const selectedContact = contacts.find(
    (contact) => contact.id === selectedContactId
  );

  console.log(contacts);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              onClick={() => handleSelectContact(contact.id)}
            />
          ))}
        </tbody>
      </table>
      {selectedContact && (
        <div>
          <h2>Contact Details</h2>
          <p>ID: {selectedContact.id}</p>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>

          <p>
            Address: {selectedContact.address.street},{" "}
            {selectedContact.address.suite}, {selectedContact.address.city},{" "}
            {selectedContact.address.zipcode}
          </p>
          <p>Company: {selectedContact.company.name}</p>
        </div>
      )}
    </>
  );
}
