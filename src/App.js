import DrumMachine from "./components/DrumMachine";
import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(true);

  let className = "App";
  if (theme) {
    className += " dark";
  } else {
    className += " light";
  }
  function toggleDarkScreen() {
    // alert("Dark Mode toggle");
    setTheme(!theme);
  }

  return (
    <div className={className}>
      <DrumMachine toggleDarkScreen={toggleDarkScreen} theme={theme} />
    </div>
  );
}

export default App;
