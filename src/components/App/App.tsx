// Порефакторити запит за книжками таким чином, щоб він відбувався з використанням хука useQuery.
// Порефакторити запит за юзерами таким чином, щоб він відбувався з використанням хука useQuery.
// Додати пагінацію для запиту по книжкам з використанням бібліотеки react-paginate (загальну кількість елементів захардкодити як 50)

import { useState } from "react";
import { Books } from "../Books/Books.tsx";
import { Users } from "../Users/Users.tsx";
import AddContactForm from "../Contact/Contact.tsx";

type Tab = "users" | "books";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("users");
  return (
    <>
      <AddContactForm />
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
