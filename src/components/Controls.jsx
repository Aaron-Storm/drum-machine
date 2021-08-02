// import { useState } from "react";
import { ReactComponent as Power } from "../assets/power.svg";
import Button from "./Button.jsx";
import classNames from "classnames";
import VolumeSlider from "./VolumeSlider";
import "./Controls.css";

function Controls({ activeBank, handleVolume, theme, power }) {

  let wrapperClass = classNames("ctrlWrapper", {
    off: !power,
  });

  let bankAClass = classNames("ctrlBtn bankA", {
    active: power && activeBank === "bankA",
    darkTheme: theme,
    lightTheme: !theme,
    hidden: !power
  });
  let bankBClass = classNames("ctrlBtn bankB", {
    active: power && activeBank === "bankB",
    darkTheme: theme,
    lightTheme: !theme,
    hidden: !power
  });
  let powerClass = classNames("ctrlBtn pwr", {
    darkTheme: theme,
    lightTheme: !theme,
  });

  let inputClass = classNames("volumeWrapper", {
    off: !power
  })

  let iconClass = classNames('power', {
    iconOff: !power,

  })

  const btnProps = [
    {
      className: bankAClass,
      id: "bankA",
      children: <span className="text">BANK A</span>,
      // tabIndex: !power ? -1 : 0
    },
    {
      className: powerClass,
      id: "pwr",
      children: <Power className={iconClass} />,
      // tabIndex: 0
    },
    {
      className: bankBClass,
      id: "bankB",
      children: <span className="text">BANK B</span>,
      // tabIndex: !power ? -1 : 0
    },
  ];

  return (
    <div className="controls">
      <div className={wrapperClass}>
        {btnProps.map((prop) => {
          return (
            <Button
              className={prop.className}
              id={prop.id}
              children={prop.children}
              power={power}
              theme={theme}
              tabIndex={prop.tabIndex}
              key={prop.id}
            />
          );
        })}
      </div>

      <div className={inputClass}>
        <input
          type="range"
          min="0"
          max="100"
          className="volume"
          onChange={handleVolume}
          tabIndex={!power ? -1 : 0}
        />
      </div>
    </div>
  );
}

export default Controls;
