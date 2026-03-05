import type { Student } from "../../types";
import css from "./StudentItem.module.css";
import clsx from "clsx";

interface StudentItemProps {
  student: Student;
}

export default function StudentItem({ student }: StudentItemProps) {
  const statusStyles = clsx(
    css.status,
    student.isOnline ? css.online : css.offline,
  );

  return (
    <>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>
        Online:
        <span className={statusStyles}>{student.isOnline ? "yes" : "no"}</span>
      </p>
      <img src={student.avatar} alt={student.name} />
    </>
  );
}
