import DrumMachine from "./components/DrumMachine";
import { useState, useRef } from "react";
import classNames from "classnames";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(true);
  const [power, setPower] = useState(false);
  const [name, setName] = useState("WELCOME");
  const [bank, setBank] = useState("bankA");
  const [active, setActive] = useState(false);
  const [volume, setVolume] = useState(50);

  const audioRef = useRef([]);

  let appClass = classNames("App", {
    dark: theme,
    light: !theme,
  });

  //

  function toggleDarkScreen() {
    setTheme(!theme);
  }

  function playAudio(e) {
    if (e.type === "click" && power) {
      for (let i = 0; i < audioRef.current.length; i++) {
        if (e.currentTarget.firstChild.id === audioRef.current[i].id) {
          audioRef.current[i].currentTime = 0;
          audioRef.current[i].volume = volume / 100;
          audioRef.current[i].play();
          setName(e.currentTarget.id);
          setActive(true);
        }
      }
    }

    if (e.type === "keydown" && power) {
      try {
        let myCurrentKey = e.key.toUpperCase();
        for (let i = 0; i < audioRef.current.length; i++) {
          if (myCurrentKey === audioRef.current[i].id) {
            audioRef.current[i].currentTime = 0;
            audioRef.current[i].volume = volume / 100;
            audioRef.current[i].play();
            setName(audioRef.current[i].parentElement.id);
            setActive(true);
          }
        }
      } catch (error) {
        console.log('test');
      }
    }
  }

  function handleVolume(e) {
    let volumeSlider = e.currentTarget.value;
    setVolume(volumeSlider);
  }

  const ctrlBtnHandlerTest = (e) => {
    try {
      if (e.currentTarget.classList.contains("bankA")) {
        setBank("bankA");
      } else if (e.currentTarget.classList.contains("bankB")) {
        setBank("bankB");
      } else if (e.currentTarget.classList.contains("pwr")) {
        setPower(!power);
        console.log("power toggle");
      }
    } catch (error) {}
  };

  function removeClassTest(e) {
    setTimeout(() => {
      setActive(false);
    }, 200);
  }

  return (
    <div className={appClass} onKeyDown={playAudio} tabIndex={-1}>
      <DrumMachine
        toggleDarkScreen={toggleDarkScreen}
        theme={theme}
        power={power}
        bank={bank}
        audioRef={audioRef}
        handleClick={playAudio}
        displayName={name}
        volume={volume}
        handleVolume={handleVolume}
        activePad={active}
        ctrlClickHandler={ctrlBtnHandlerTest}
        handlePlaying={removeClassTest}
      />
    </div>
  );
}

export default App;
