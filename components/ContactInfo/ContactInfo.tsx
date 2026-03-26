import { Contact } from "@/types/contacts";
import Image from "next/image";

interface ContactInfoProps {
  contact: Contact;
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
      <span>{contact.hasWork ? "Has Work" : "Dont have work"}</span>
      <Image
        src="/nature.jpg"
        alt="Image nature"
        width={300}
        height={200}
        loading="eager"
      />
    </div>
  );
}
