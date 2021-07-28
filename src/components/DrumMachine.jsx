import React, { useState, useEffect } from "react";
import Display from "./Display";
import DrumPads from "./DrumPads";
import Header from "./Header";
import Controls from "./Controls";
// import "./DrumMachine.css";
import styles from "./DrumMachine.module.css";

function DrumMachine({ theme, toggleDarkScreen }) {
  const [power, setPower] = useState(false);
  const [name, setName] = useState("WELCOME");
  const [active, setActive] = useState(false);
  const [bank, setBank] = useState("bankA");
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    function removeClass(e) {
      const drumPad = e.target.parentElement;
      setTimeout(() => {
        setActive(false);
      }, 200);
    }

    const clips = Array.from(document.querySelectorAll(".clip"));

    clips.forEach((clip) => {
      // console.log(clip);
      clip.addEventListener("playing", removeClass);
    });
    // console.log(clips);
    return () => {
      window.removeEventListener("playing", removeClass);
    };
  });

  function playAudio(e) {
    // console.log(e.currentTarget);
    let myTarget = e.currentTarget;
    const audio = document.querySelector(
      `audio[id="${myTarget.firstChild.id}"]`
    );
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    setName(myTarget.id);
    setActive(true);
  }

  useEffect(() => {
    const ctrlBtnHandler = (e) => {
      try {
        console.log(e.currentTarget.classList.contains("bankA"));
        if (e.currentTarget.classList.contains("bankA")) {
          setBank("bankA");
        } else if (e.currentTarget.classList.contains("bankB")) {
          setBank("bankB");
        }
      } catch (error) {}
    };
    console.log(bank);

    const keyIsPressed = (e) => {
      try {
        let keyCode = e.key.toUpperCase();
        const audio = document.querySelector(`audio[id="${keyCode}"]`);

        if (!audio.id) return "This key is not available";
        // console.log(!audio.id);

        if (keyCode === audio.id) {
          audio.currentTime = 0;
          audio.play();

          setName(audio.parentElement.id);
          setActive(true);
        }
      } catch (error) {
        console.log("This key is not available");
      }
    };

    const btns = document.querySelectorAll(".ctrlBtn");
    btns.forEach((btn) => {
      btn.addEventListener("click", ctrlBtnHandler);
    });

    window.addEventListener("keydown", keyIsPressed);

    return () => {
      window.removeEventListener("keydown", keyIsPressed);
    };
  }, [name, bank]);

  function handleVolume(e) {
    // const audio = windo
  }


  let className = styles.drumMachine;
  if (theme) {
    className += ` ${styles.dark}`;
  } else {
    className += ` ${styles.light}`;
  }

  return (
    <div className={className} id="drum-machine">
      <Header handleClick={toggleDarkScreen} />
      <Display sound={name} volume={volume} />
      <Controls activeBank={bank} handleVolume={handleVolume} theme={theme} />
      <DrumPads
        onClick={playAudio}
        active={active}
        clipName={name}
        activeBank={bank}
        theme={theme}
      />
    </div>
  );
}

export default DrumMachine;
