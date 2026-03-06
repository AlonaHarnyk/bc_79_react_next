import { Button } from "../Button/Button";

interface ConfirmBlockProps {
  handleYes: () => void;
  handleNo: () => void;
}

export default function ConfirmBlock({
  handleYes,
  handleNo,
}: ConfirmBlockProps) {
  return (
    <div>
      <p>Are you sure?</p>
      <ul>
        <li>
          <Button text="Yes" clickHandler={handleYes} />
        </li>
        <li>
          <Button text="No" clickHandler={handleNo} />
        </li>
      </ul>
    </div>
  );
}
