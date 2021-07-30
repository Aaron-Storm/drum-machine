import { useState } from 'react'
import classNames from 'classnames'
import "./DrumPad.css";

function DrumPad({className, theme, id, src, children, power}) {

  const [hover, setHover] = useState(false);

  function handleHover(e) {
    setHover(!hover);
  }


  let btnClass = classNames( className, {
    'off': !power,
    'darkBtn': theme,
    'lightBtn': !theme,
    'darkBtnHover': power && hover && theme,
    'lightBtnHover': power && hover && !theme,
    'hoverScale': power && hover
  })
  

  return (
    <button 
    className={btnClass} 
    id={id} 
    onMouseEnter={handleHover}
    onMouseLeave={handleHover}
    >
      <audio
        className="clip"
        src={src}
        type="audio/wav"
        id={children}
        preload="auto"
      ></audio>
      <span className="key-code">{children}</span>
    </button>
  );
}

export default DrumPad;
