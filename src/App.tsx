import { DogsList } from "./components/DogsList/DogsList";
import { StudentList } from "./components/StudentList/StudentList";
import { students } from "./data";
import { dogs } from "./dogs";

function App() {
  return (
    <>
      <h2>List of users</h2>
      <StudentList students={students} />
      <h2>List of dogs</h2>
      <DogsList dogs={dogs} />
    </>
  );
}

export default App;
