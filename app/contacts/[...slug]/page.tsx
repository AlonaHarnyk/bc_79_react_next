import ContactsList from "@/components/ContactsList/ContactsList";
import { getContacts } from "@/lib/contactService";

interface ContactsProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Contacts({ params }: ContactsProps) {
  const { slug } = await params;
  const category = slug[0];
  const catgoryForSearch =
    category === "all" ? undefined : category === "with-job" ? true : false;

  const contactsData = await getContacts(catgoryForSearch);

  return (
    <>
      {contactsData && contactsData.length > 0 && (
        <ContactsList contacts={contactsData} />
      )}
    </>
  );
}
