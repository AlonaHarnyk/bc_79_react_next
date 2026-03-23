import { Contact } from "@/types/contacts";

interface ContactsListProps {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <span>{contact.hasWork ? "Has Work" : "Dont have work"}</span>
        </li>
      ))}
    </ul>
  );
}
