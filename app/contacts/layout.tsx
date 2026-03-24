import ContactCategories from "@/components/ContactCategories/ContactCategories";

interface ContactsLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function ContactsLayout({
  children,
  sidebar,
}: ContactsLayoutProps) {
  return (
    <>
      <div style={{ display: "flex" }}>
        {sidebar}
        {children}
      </div>
    </>
  );
}
