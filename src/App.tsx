import { StudentList } from "./components/StudentList/StudentList";
import { students } from "./data";

function App() {
  return (
    <>
      <h2>List of users</h2>
      <StudentList students={students} />
    </>
  );
}

export default App;
