// import { useState } from "react";
import { ReactComponent as Power } from "../assets/power.svg";
import Button from "./Button.jsx";
import classNames from "classnames";
import "./Controls.css";

function Controls({ activeBank, handleVolume, theme, power, ctrlClickHandler }) {
  let wrapperClass = classNames("ctrlWrapper", {
    off: !power,
  });

  let bankAClass = classNames("ctrlBtn bankA", {
    active: power && activeBank === "bankA",
    darkTheme: theme,
    lightTheme: !theme,
    hidden: !power,
  });
  let bankBClass = classNames("ctrlBtn bankB", {
    active: power && activeBank === "bankB",
    darkTheme: theme,
    lightTheme: !theme,
    hidden: !power,
  });
  let powerClass = classNames("ctrlBtn pwr", {
    darkTheme: theme,
    lightTheme: !theme,
  });

  let inputClass = classNames("volumeWrapper", {
    off: !power,
  });

  let iconClass = classNames("power", {
    iconOff: !power,
  });

  const btnProps = [
    {
      className: bankAClass,
      id: "bankA",
      ariaLabel: "Bank A",
      children: <span className="text">BANK A</span>,
    },
    {
      className: powerClass,
      id: "pwr",
      ariaLabel: "Power Button",
      children: <Power className={iconClass} />,
    },
    {
      className: bankBClass,
      id: "bankB",
      ariaLabel: "Bank B",
      children: <span className="text">BANK B</span>,
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
              ctrlClickHandler={ctrlClickHandler}
              power={power}
              theme={theme}
              key={prop.id}
              ariaLabel={prop.ariaLabel}
            />
          );
        })}
      </div>

      <div className={inputClass}>
        <input
          type="range"
          aria-label='Volume'
          className="volume"
          onChange={handleVolume}
          tabIndex={!power ? -1 : 0}
        />
      </div>
    </div>
  );
}

export default Controls;
