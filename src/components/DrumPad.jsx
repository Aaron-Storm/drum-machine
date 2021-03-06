import { useState } from "react";
import classNames from "classnames";
import "./DrumPad.css";

function DrumPad({ className, theme, id, src, children, power, audioRef, index, handleClick, handlePlaying }) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  function handleHover(e) {
    setHover(!hover);
  }

  function handleFocus(e) {
    setFocus(!focus);
  }


  let btnClass = classNames(className, {
    off: !power,
    darkBtn: theme,
    lightBtn: !theme,
    darkBtnHover: power && hover && theme,
    lightBtnHover: power && hover && !theme,
    hoverScale: !focus && power && hover,
    darkBtnFocus: power && theme && focus,
    lightBtnFocus: power && !theme && focus
  });

  return (
    <button
      className={btnClass}
      id={id}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onFocus={handleFocus}
      onBlur={handleFocus} 
      onPlaying={handlePlaying}
      tabIndex={!power ? -1 : 0}
      
    >
      <audio
        ref={el => audioRef.current[index] = el}
        className="clip"
        src={src}
        type="audio/mp3"
        id={children} 
        // crossOrigin="anonymous"
        preload="auto"
      ></audio>
      <span className="key-code">{children}</span>
    </button>
  );
}

export default DrumPad;
