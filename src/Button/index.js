import htmlToElement from "../utils/htmlToElement";
import ButtonHTML from "./index.html";

import "./index.scss";

const Button = ({onClick, title, className}) => {
  const buttonElement = htmlToElement(ButtonHTML);
  buttonElement.innerHTML = title;
  buttonElement.classList.add(className);
  buttonElement.addEventListener('click', onClick);
  return buttonElement;
};

export default Button;