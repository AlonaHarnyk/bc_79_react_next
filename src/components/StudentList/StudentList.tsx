import type { Student } from "../../types";

interface StudentListProps {
  students: Student[];
}

export function StudentList({ students }: StudentListProps) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <h2>{student.name}</h2>
        </li>
      ))}
    </ul>
  );
}
