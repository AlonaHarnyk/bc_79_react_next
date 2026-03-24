"use client";
import { useRouter } from "next/navigation";
import css from "./Modal.module.css";
interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={() => router.back()} className={css.close_btn}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}
