import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// import { students } from "./data";

// const student = students[0];

// const markup = (
//   <>
//     <p>{student.name}</p> <p>{student.age} </p>
//     {/* <p>{String(student.isOnline)}</p> */}
//     {/* <p>Status online:{student.isOnline ? "yes" : "no"}</p> */}
//     {/* {student.isOnline ? <p>Status online: yes</p> : <h1>Status online: no</h1>} */}
//     {student.isOnline && <p>Status online: yes</p>}
//   </>
// );

// const markup = (
//   <ul>
//     {students.map((student) => (
//       <li key={student.id}>
//         <h2>{student.name}</h2>
//       </li>
//     ))}
//   </ul>
// );

createRoot(document.getElementById("root")!).render(<App />);
