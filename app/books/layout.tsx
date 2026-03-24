interface BookLayoutProps {
  children: React.ReactNode;
  bookDetails: React.ReactNode;
}

export default function BooksLayout({
  children,
  bookDetails,
}: BookLayoutProps) {
  return (
    <>
      {children}
      {bookDetails}
    </>
  );
}
