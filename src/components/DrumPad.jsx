import "./DrumPad.css";


function DrumPad(props) {

  let className = props.className;
  if (props.theme) {
    className += " darkBtn";
  } else {
    className += " lightBtn";
  }
  
  return (
    <button className={className} id={props.id} onClick={props.onClick}>

      <audio
        className="clip"
        src={props.src}
        type="audio/wav"
        id={props.children}
        // crossOrigin="anonymous"
        preload="auto"
        // onChange={}
      ></audio>
      <span className="key-code">{props.children}</span>
    </button>
  );
}

export default DrumPad;
