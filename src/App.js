import DrumMachine from "./components/DrumMachine";
import { useState } from "react";
import classNames from "classnames";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(true);

  let appClass = classNames( 'App', { 
    'dark': theme,
    'light': !theme,
  })

  function toggleDarkScreen() {
    setTheme(!theme);
  }

  return (
    <div className={appClass}>
      <DrumMachine toggleDarkScreen={toggleDarkScreen} theme={theme} />
    </div>
  );
}

export default App;
