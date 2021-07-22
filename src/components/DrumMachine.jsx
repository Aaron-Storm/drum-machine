import React, { useState, useEffect } from "react";
import Display from "./Display";
import DrumPads from "./DrumPads";
import "./DrumMachine.css";

function DrumMachine() {
  const [power, setPower] = useState(false);
  const [name, setName] = useState("WELCOME");
  const [active, setActive] = useState(false);

  useEffect(() => {
    function removeClass(e) {
      const drumPad = e.target.parentElement;
      setTimeout(() => {
        setActive(false);
      }, 200);
    }

    const clips = Array.from(document.querySelectorAll(".clip"));

    clips.forEach((clip) => {
      console.log(clip);
      clip.addEventListener("playing", removeClass);
    });
    console.log(clips);
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

    window.addEventListener("keydown", keyIsPressed);
    return () => {
      window.removeEventListener("keydown", keyIsPressed);
    };
  }, [name]);

  return (
    // <AudioProvider>
    <div className="drum-machine" id="drum-machine">
      <div className="controls">
        <div className="title">DRUM MACHINE</div>
        <Display sound={name} />
      </div>

      <DrumPads onClick={playAudio} active={active} clipName={name} />
    </div>
    // </AudioProvider>
  );
}

export default DrumMachine;
