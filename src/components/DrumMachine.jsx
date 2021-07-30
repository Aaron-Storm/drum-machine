import React, { useState, useEffect } from "react";
import Display from "./Display";
import DrumPads from "./DrumPads";
import Header from "./Header";
import Controls from "./Controls";
import classNames from 'classnames';
import styles from "./DrumMachine.module.css";

function DrumMachine({ theme, toggleDarkScreen }) {
  const [power, setPower] = useState(false);
  const [name, setName] = useState("WELCOME");
  const [active, setActive] = useState(false);
  const [bank, setBank] = useState("bankA");
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    console.log("UseEffect Nr.1");
    function removeClass(e) {
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

  useEffect(() => {
    console.log("UseEffect Nr.2");

    const ctrlBtnHandler = (e) => {
      // console.log(e.currentTarget)
      // console.log(e.target)
      try {
        
        if (e.currentTarget.classList.contains("bankA")) {
          setBank("bankA");
        } else if (e.currentTarget.classList.contains("bankB")) {
          setBank("bankB");
        } else if (e.currentTarget.classList.contains("pwr")) {
          setPower(!power)
          console.log('power toggle')
        }
      } catch (error) {}
    };

    const playAudio = (e) => {

      console.log(e.eventPhase)
      if (e.type === "click") {
        let myTarget = e.currentTarget;

        const audio = document.querySelector(
          `audio[id="${myTarget.firstChild.id}"]`
        );

        if (!audio) return;

        audio.currentTime = 0;
        audio.volume = volume / 100;
        audio.play();
        setName(myTarget.id);
        setActive(true);
      }

      if (e.type === "keydown") {
        try {
          let keyCode = e.key.toUpperCase();
          const audio = document.querySelector(`audio[id="${keyCode}"]`);

          if (!audio.id) return "This key is not available";
          // console.log(!audio.id);

          if (keyCode === audio.id) {
            audio.currentTime = 0;
            audio.volume = volume / 100;
            audio.play();

            setName(audio.parentElement.id);
            setActive(true);
          }
        } catch (error) {
          console.log("This key is not available");
        }
      }
    };

    const btns = document.querySelectorAll(".ctrlBtn");
    btns.forEach((btn) => {
      btn.addEventListener("click", ctrlBtnHandler);
    });

    const pads = document.querySelectorAll(".drum-pad");
    pads.forEach((pad) => {
      pad.addEventListener("click", playAudio);
    });

    window.addEventListener("keydown", playAudio);
    return () => {
      btns.forEach((btn) => {
        btn.removeEventListener("click", ctrlBtnHandler);
      });

      pads.forEach((pad) => {
        pad.removeEventListener("click", playAudio);
      });

      window.removeEventListener("keydown", playAudio);
    };
  }, [name, bank, volume, power]);

  function handleVolume(e) {
    let volumeSlider = e.currentTarget.value;
    console.log(volumeSlider);
    setVolume(volumeSlider);
  }

  let cx = classNames.bind(styles);

  let drumMachineClass = cx({
    [styles.drumMachine]: true,
    [styles.darkDrumMachine]: theme,
    [styles.lightDrumMachine]: !theme
  })

  return (
    <div className={drumMachineClass} id="drum-machine">
      <Header power={power} handleClick={toggleDarkScreen} />
      <Display power={power} sound={name} volume={volume} />
      <Controls
        power={power}
        activeBank={bank}
        theme={theme}
        handleVolume={handleVolume}
      />
      <DrumPads
        power={power}
        active={active}
        clipName={name}
        activeBank={bank}
        theme={theme}
      />
    </div>
  );
}

export default DrumMachine;
