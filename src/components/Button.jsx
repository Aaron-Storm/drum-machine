import { useState } from "react";
import classNames from "classnames";

const Button = ({ className, id, power, children, theme, ariaLabel }) => {


  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false)

  function handleHover(e) {
    
    setHover(!hover);
  }

  function handleFocus(e) {
    setFocus(!focus);
  }

  let btnClass = classNames( className, {
      'darkThemeHover': power && hover && theme,
      'lightThemeHover': power && hover && !theme,
      'ctrlBtnHover': power && hover,
      'darkThemeFocus': focus && theme,
      'lightThemeFocus': focus && !theme,

  })

  return (
    <button
      className={btnClass}
      id={id}
      aria-label={ariaLabel}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onFocus={handleFocus}
      onBlur={handleFocus}
    >
      {children}
    </button>
  );
};

export default Button;
