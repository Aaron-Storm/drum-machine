import React, { useState, useEffect, useRef } from "react";
import Display from "./Display";
import DrumPads from "./DrumPads";
import Header from "./Header";
import Controls from "./Controls";
import classNames from "classnames";
import styles from "./DrumMachine.module.css";

function DrumMachine({
  theme,
  toggleDarkScreen,
  power,
  bank,
  handleClick,
  audioRef,
  displayName,
  volume,
  activePad,
  handleVolume,
  ctrlClickHandler
}) {

  

  let cx = classNames.bind(styles);

  let drumMachineClass = cx({
    [styles.drumMachine]: true,
    [styles.darkDrumMachine]: theme,
    [styles.lightDrumMachine]: !theme,
  });

  return (
    <div className={drumMachineClass} id="drum-machine">
      <Header power={power} handleClick={toggleDarkScreen} />
      <Display power={power} sound={displayName} volume={volume} />
      <Controls
        power={power}
        activeBank={bank}
        theme={theme}
        handleVolume={handleVolume}
        ctrlClickHandler={ctrlClickHandler}
      />
      <DrumPads
        power={power}
        active={activePad}
        clipName={displayName}
        activeBank={bank}
        theme={theme}
        audioRef={audioRef}
        handleClick={handleClick}
      />
    </div>
  );
}

export default DrumMachine;
