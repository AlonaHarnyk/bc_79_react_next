// Порефакторити запит за книжками таким чином, щоб він відбувався з використанням хука useQuery.
// Порефакторити запит за юзерами таким чином, щоб він відбувався з використанням хука useQuery.
// Додати пагінацію для запиту по книжкам з використанням бібліотеки react-paginate (загальну кількість елементів захардкодити як 50)// Cтворити форму додавання користувача (форма має містити 2 текстових інпути - для введення імені та пошти). Форма має відкриватись по кнопці Add user, яка має рендеритись під списком юзерів (за уиови, що останній відрендерений). Коли форма відкрита, кнопка Add user має зникнути. При сабміті форми дані мають виводитись в консоль, форма зникати, натомість повертатись кнопка Add user.

import { useState } from "react";
import { Books } from "../Books/Books.tsx";
import { Users } from "../Users/Users.tsx";

type Tab = "users" | "books";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("users");
  return (
    <>
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
