import { Metadata } from "next";

interface BookLayoutProps {
  children: React.ReactNode;
  bookDetails: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Books page",
    description:"Information about books"
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
