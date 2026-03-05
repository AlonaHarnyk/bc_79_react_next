import type { Student } from "../../types";
import StudentItem from "../StudentItem/StudentItem";

import css from "./StudentList.module.css";

interface StudentListProps {
  students: Student[];
}

export function StudentList({ students }: StudentListProps) {
  return (
    <ul className={css.studentList}>
      {students.map((student) => (
        <li className={css.studentItem} key={student.id}>
          <StudentItem student={student} />
        </li>
      ))}
    </ul>
  );
}
