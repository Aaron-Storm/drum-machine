import React from "react";
import { ReactComponent as Power } from "../assets/power.svg";
import classNames from 'classnames';
import "./Controls.css";

function Controls({ activeBank, handleVolume, theme, power }) {

  let bankAClass = classNames('ctrlBtn bankA', { 
    'active': activeBank === "bankA",
    'darkTheme': theme,
    'lightTheme': !theme
  })
  let bankBClass = classNames('ctrlBtn bankB', {
    'active': activeBank === "bankB",
    'darkTheme': theme,
    'lightTheme': !theme
  })
  let powerClass = classNames('ctrlBtn', {
    'darkTheme': theme,
    'lightTheme': !theme
  })

  return (
    <div className="controls">
      <div className={power ? "ctrlWrapper" : "ctrlWrapper"}>
        <button className={bankAClass}>
          <span className="text">BANK A</span>
        </button>
        <button className={powerClass}>
          <Power class="power" />
        </button>
        <button className={bankBClass}>
          <span className="text">BANK B</span>
        </button>
      </div>

      <div className="volumeWrapper">
        <input
          type="range"
          min="0"
          max="100"
          className="volume"
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}

export default Controls;
