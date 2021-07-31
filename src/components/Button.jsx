import { useState } from "react";
import classNames from "classnames";

const Button = ({ className, id, power, children, theme }) => {


  const [hover, setHover] = useState(false);
  // const [focus, setFocus] = useState(false)

  function handleHover(e) {
    
    setHover(!hover);
  }

  let btnClass = classNames( className, {
      'darkThemeHover': power && hover && theme,
      'lightThemeHover': power && hover && !theme,
      'ctrlBtnHover': power && hover
  })

  return (
    <button
      className={btnClass}
      id={id}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {children}
    </button>
  );
};

export default Button;
