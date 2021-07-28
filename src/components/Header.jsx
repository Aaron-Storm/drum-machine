import './Header.css'
import { ReactComponent as ThemeToggle } from '../assets/lightMode.svg'

function Header(props) {
  return (
    <div className="header">
      
        <h1 className="title">DRUM MACHINE</h1>
        <ThemeToggle class="theme" onClick={props.handleClick} />
        <h2 className="author">by Aaron J. Storm</h2>
        
    </div>
  );
}

export default Header;
