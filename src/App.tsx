import { useState } from "react";
import { DogsList } from "./components/DogsList/DogsList";
import { StudentList } from "./components/StudentList/StudentList";
import { students } from "./data";
import { initialDogs } from "./dogs";
import { type Dog } from "./types";

// Записати масив dogs у state компонента App, використовуючи useState. Саме з цього state дані повинні передаватися далі у дочірні компоненти.
// Створити перевикористовуваний компонент Button, який мовинен отртмувати текстовий контент та обродник події кліку як пропси.
// У кожному елементі списку потрібно додати кнопку "View profile". При натисканні на кнопку має викликатися обробник події onClick, а у консолі браузера повинен виводитись ідентифікатор тварини.

function App() {
  const [dogs, setDogs] = useState<Dog[]>(initialDogs);

  const deleteDog = (id: number): void => {
    setDogs(dogs.filter((dog) => dog.id !== id));
  };

  return (
    <>
      <h2>List of users</h2>
      <StudentList students={students} />
      <h2>List of dogs</h2>
      <DogsList dogs={dogs} onDelete={deleteDog} />
    </>
  );
}

export default App;
