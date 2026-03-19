import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
