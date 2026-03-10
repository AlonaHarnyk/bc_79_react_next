import type { ReactNode } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  const handleBackdropClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClose}>
      <div className={css.modal}>
        <button className={css.btnClose} type="button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
