import { useState } from "react";
import { Button } from "../Button/Button";

interface Tags {
  HTML: number;
  JS: number;
  React: number;
}

export default function TagWidget() {
  const [clicked, setClicked] = useState<Tags>({
    HTML: 0,
    JS: 0,
    React: 0,
  });
  const handleClick = (tagName: keyof Tags) => {
    setClicked({ ...clicked, [tagName]: clicked[tagName] + 1 });
  };
  return (
    <div>
      <ul>
        <li>
          <Button
            text={`HTML: ${clicked.HTML}`}
            clickHandler={() => handleClick("HTML")}
          />
        </li>
        <li>
          <Button
            text={`JS: ${clicked.JS}`}
            clickHandler={() => handleClick("JS")}
          />
        </li>
        <li>
          <Button
            text={`React: ${clicked.React}`}
            clickHandler={() => handleClick("React")}
          />
        </li>
      </ul>
    </div>
  );
}
