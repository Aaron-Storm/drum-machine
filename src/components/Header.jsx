import "./Header.css";
import DarkModeIcon from "./DarkModeIcon.jsx";


function Header(props) {
  return (
    <div className="header">
      <h1 className="title">DRUM MACHINE</h1>
      <DarkModeIcon
        onPress={props.handleClick}
        tabIndex={0}
      />
      <h2 className="author">by Aaron J. Storm</h2>
    </div>
  );
}

export default Header;
