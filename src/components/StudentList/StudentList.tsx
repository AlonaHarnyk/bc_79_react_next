import type { Student } from "../../types";
import StudentItem from "../StudentItem/StudentItem";

import css from "./StudentList.module.css";

interface StudentListProps {
  students: Student[];
  onDelete: (id: number) => void;
}

export function StudentList({ students, onDelete }: StudentListProps) {
  return (
    <ul className={css.studentList}>
      {students.map((student) => (
        <li className={css.studentItem} key={student.id}>
          <StudentItem student={student} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
