import React, { useEffect } from "react";
import "./DrumPads.css";
import DrumPad from "./DrumPad";

const BankA = [
  {
    className: "drum-pad",
    id: "KICK",
    src: "/audio/bankA/real-life-KICK.wav",
    label: "Q",
  },
  {
    className: "drum-pad",
    id: "SN1",
    src: "/audio/bankA/real-life-SN1.WAV",
    label: "W",
  },
  {
    className: "drum-pad",
    id: "TOM1F",
    src: "/audio/bankA/real-life-TOM1F.WAV",
    label: "E",
  },
  {
    className: "drum-pad",
    id: "TOM1L",
    src: "/audio/bankA/real-life-TOM1L.WAV",
    label: "A",
  },
  {
    className: "drum-pad",
    id: "TOM2LAMBI",
    src: "/audio/bankA/real-life-TOM2LAMBI.WAV",
    label: "S",
  },
  {
    className: "drum-pad",
    id: "RIDE",
    src: "/audio/bankA/real-life-SN2.WAV",
    label: "D",
  },
  {
    className: "drum-pad",
    id: "CRASH1",
    src: "/audio/bankA/real-life-CRASH1.WAV",
    label: "Z",
  },
  {
    className: "drum-pad",
    id: "CRASH2",
    src: "/audio/bankA/real-life-CRASH2.WAV",
    label: "X",
  },
  {
    className: "drum-pad",
    id: "RIM",
    src: "/audio/bankA/real-life-RIM.WAV",
    label: "C",
  },
];
const BankB = [
  {
    className: "drum-pad",
    id: "SHARP KICK",
    src: "/audio/bankB/analog-sharp-kick.wav",
    label: "Q",
  },
  {
    className: "drum-pad",
    id: "SN",
    src: "/audio/bankB/ec-sn022.wav",
    label: "W",
  },
  {
    className: "drum-pad",
    id: "SLAP",
    src: "/audio/bankB/kungfu-slap.wav",
    label: "E",
  },
  {
    className: "drum-pad",
    id: "TONGUE",
    src: "/audio/bankB/tongue-ripple-hit.wav",
    label: "A",
  },
  {
    className: "drum-pad",
    id: "CLAP",
    src: "/audio/bankB/Clap2.wav",
    label: "S",
  },
  {
    className: "drum-pad",
    id: "STABS",
    src: "/audio/bankB/stabs-hits-061.wav",
    label: "D",
  },
  {
    className: "drum-pad",
    id: "STABS2",
    src: "/audio/bankB/stabs-hits-144.wav",
    label: "Z",
  },
  {
    className: "drum-pad",
    id: "CRASH",
    src: "/audio/bankB/909-bright-crash.wav",
    label: "X",
  },
  {
    className: "drum-pad",
    id: "STEEL DRUM",
    src: "/audio/bankB/SteelDrum-vs.wav",
    label: "C",
  },
];



function DrumPads({ clipName, active, onClick, activeBank, theme, power }) {

 const targetBank = activeBank === 'bankA'? BankA : BankB 

  return (
    <div className="drum-pads">
      {
      
      targetBank.map((clip) => {
        const className =
          clip.id === clipName && active
            ? clip.className + " playing"
            : clip.className;
        return (
          <DrumPad
            className={className}
            src={clip.src}
            id={clip.id}
            key={clip.id}
            children={clip.label}
            onClick={onClick}
            theme={theme}
            power={power}
          />
        );
      })}
    </div>
  );
}

export default DrumPads;
