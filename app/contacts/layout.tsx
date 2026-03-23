import ContactCategories from "@/components/ContactCategories/ContactCategories";

export default function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <ContactCategories />
      </div>
      {children}
    </>
  );
}
