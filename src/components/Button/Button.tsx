import css from "./Button.module.css";

interface ButtonProps {
  text: string;
  clickHandler: () => void;
}

export function Button({ text, clickHandler }: ButtonProps) {
  return (
    <button className={css.baseBtn} type="button" onClick={clickHandler}>
      {text}
    </button>
  );
}
