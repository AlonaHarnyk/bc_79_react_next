import { getContactById } from "@/lib/contactService";
import Modal from "@/components/Modal/Modal";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

interface ContactDetailModalProps {
  params: Promise<{ contactId: string }>;
}

export default async function ContactDetailsModal({
  params,
}: ContactDetailModalProps) {
  const { contactId } = await params;
  const contact = await getContactById(contactId);

  return (
    <Modal>
      <ContactInfo contact={contact} />
    </Modal>
  );
}
