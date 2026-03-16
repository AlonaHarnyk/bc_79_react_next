// Реалізувати запит на додавання книги (має викликатись при сабміті форми AddBookForm)
// Додати компоненту BookItem кнопку видалення, при натисканні на яку елемент має видалятись (реалізувати відповідний запит)
// Реалізувати запит на додавання юзера (має викликатись при сабміті форми UserForm)
// Додати компоненту UserItem кнопку видалення, при натисканні на яку елемент має видалятись (реалізувати відповідний запит)

// Додатково
// Додати компоненту UserItem параграф, в якому виводити інформацію про те, чи користувач онлайн.
// Додати компоненту UserItem кнопку Toggle status, ми натисанні на яку на бекенд має відправлятись put-запит для зміни статусу на протилежний.

import { useState } from "react";
import { Books } from "../Books/Books.tsx";
import { Users } from "../Users/Users.tsx";
// import AddContactForm from "../Contact/Contact.tsx";

type Tab = "users" | "books";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("users");
  return (
    <>
      {/* <AddContactForm /> */}
      <ul>
        <li>
          <button
            onClick={() => {
              setActiveTab("users");
            }}
          >
            Show users
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setActiveTab("books");
            }}
          >
            Show books
          </button>
        </li>
      </ul>
      {activeTab === "users" && <Users />}
      {activeTab === "books" && <Books />}
    </>
  );
}

export default App;
