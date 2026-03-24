import ContactCategories from "@/components/ContactCategories/ContactCategories";

interface ContactsLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}

export default function ContactsLayout({
  children,
  sidebar,
  modal,
}: ContactsLayoutProps) {
  return (
    <>
      <div style={{ display: "flex" }}>
        {sidebar}
        {children}
        {modal}
      </div>
    </>
  );
}
