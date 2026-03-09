import css from "./Button.module.css";

interface ButtonProps {
  clickHandler: () => void;
  text: string;
}

export const Button = ({ text, clickHandler }: ButtonProps) => {
  return (
    <button className={css.btn} type="button" onClick={clickHandler}>
      {text}
    </button>
  );
};
