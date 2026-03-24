import { Contact } from "@/types/contacts";
import Link from "next/link";

interface ContactsListProps {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link href={`/contact-details/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  );
}
