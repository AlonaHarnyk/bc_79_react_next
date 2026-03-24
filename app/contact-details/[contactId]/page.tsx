import ContactInfo from "@/components/ContactInfo/ContactInfo";
import { getContactById } from "@/lib/contactService";

interface ContactDetailsPageProps {
  params: Promise<{ contactId: string }>;
}

export default async function ContactDetailsPage({
  params,
}: ContactDetailsPageProps) {
  const { contactId } = await params;
  const contact = await getContactById(contactId);

  return <ContactInfo contact={contact} />;
}
