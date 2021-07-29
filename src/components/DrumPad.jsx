import { useState } from 'react'
import classNames from 'classnames'
import "./DrumPad.css";

function DrumPad({className, theme, id, src, children}) {

  const [hover, setHover] = useState(false);

  function handleHover(e) {
    console.log('hover')

    setHover(!hover);
  }


  let btnClass = classNames( className, {
    'darkBtn': theme,
    'lightBtn': !theme,
    'darkBtnHover': hover && theme,
    'lightBtnHover': hover && !theme,
    'hoverScale': hover
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
