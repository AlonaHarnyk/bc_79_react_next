import  {type Book} from "../../types/books"

interface BooksListProps {
    books: Book[]
}

export function BooksList({ books }: BooksListProps) {
    return <ul>
        {books.map((book) => (
            <li key={book.id}>{book.title }</li>
        ))}
    </ul>
}