import { Contact } from "@/types/contacts";

interface ContactInfoProps {
  contact: Contact;
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
      <span>{contact.hasWork ? "Has Work" : "Dont have work"}</span>
    </div>
  );
}
