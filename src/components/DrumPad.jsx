import "./DrumPad.css";


function DrumPad(props) {
  
  return (
    <button className={props.className} id={props.id} onClick={props.onClick}>

      <audio
        className="clip"
        src={props.src}
        type="audio/wav"
        id={props.children}
        // crossOrigin="anonymous"
        preload="auto"
      ></audio>
      <span className="key-code">{props.children}</span>
    </button>
  );
}

export default DrumPad;
