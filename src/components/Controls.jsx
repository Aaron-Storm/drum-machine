import React from "react";
import { ReactComponent as Power } from "../assets/power.svg"
import "./Controls.css";

function Controls({activeBank, handleVolume, theme }) {

  let classNameBankA = 'ctrlBtn bankA';
  if(activeBank === 'bankA'){
    classNameBankA += ' active';
  }
  let classNameBankB = 'ctrlBtn bankB'
  if(activeBank === 'bankB'){
    classNameBankB += ' active';
  }

  let themeMode = '';
  if (theme) {
    themeMode += ' darkTheme';
  } else {
    themeMode += ' lightTheme';
  }
    
  

  return (
    <div className="controls">
      <div className="ctrlWrapper">
        <button className={classNameBankA + themeMode}><span className='text'>BANK A</span></button>
        <button className={`ctrlBtn ${themeMode}`}><Power class="power" /></button>
        <button className={classNameBankB + themeMode}><span className='text'>BANK B</span></button>
      </div>

      <div className="volumeWrapper">
        <input type="range" className="volume" onChange={handleVolume}/>
      </div>
    </div>
  );
}

export default Controls;
