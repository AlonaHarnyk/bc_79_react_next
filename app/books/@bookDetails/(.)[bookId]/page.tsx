import Modal from "@/components/Modal/Modal";
import { getBooksById } from "@/lib/booksService";

interface BookDetailsProps {
  params: Promise<{ bookId: string }>;
}

export default async function BookDetails({ params }: BookDetailsProps) {
  const { bookId } = await params;
  const book = await getBooksById(bookId);
  return (
    <>
      <Modal>
        <h2>Title: {book.title}</h2>
        <h3>Description</h3>
        <p>{book.description}</p>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
      </Modal>
    </>
  );
}
