import { useState } from "react";
import type { Student } from "../../types";
import { Button } from "../Button/Button";
import css from "./StudentItem.module.css";
import clsx from "clsx";
import ConfirmBlock from "../ConfirmBlock/ConfirmBlock";

interface StudentItemProps {
  student: Student;
  onDelete: (id: number) => void;
}

export default function StudentItem({ student, onDelete }: StudentItemProps) {
  const [shown, setShown] = useState<boolean>(false);

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
      <Button text="Delete" clickHandler={() => setShown(true)} />
      {shown && (
        <ConfirmBlock
          handleYes={() => onDelete(student.id)}
          handleNo={() => setShown(false)}
        />
      )}
    </>
  );
}
