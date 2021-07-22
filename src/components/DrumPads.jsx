import React, { useEffect } from "react";
import "./DrumPads.css";
import DrumPad from "./DrumPad";

const BankA = [
  {
    className: "drum-pad",
    id: "KICK",
    src: "/audio/real-life-KICK.wav",
    label: "Q",
  },
  {
    className: "drum-pad",
    id: "SN1",
    src: "/audio/real-life-SN1.WAV",
    label: "W",
  },
  {
    className: "drum-pad",
    id: "TOM1F",
    src: "/audio/real-life-TOM1F.WAV",
    label: "E",
  },
  {
    className: "drum-pad",
    id: "TOM1L",
    src: "/audio/real-life-TOM1L.WAV",
    label: "A",
  },
  {
    className: "drum-pad",
    id: "TOM2LAMBI",
    src: "/audio/real-life-TOM2LAMBI.WAV",
    label: "S",
  },
  {
    className: "drum-pad",
    id: "RIDE",
    src: "/audio/real-life-SN2.WAV",
    label: "D",
  },
  {
    className: "drum-pad",
    id: "CRASH1",
    src: "/audio/real-life-CRASH1.WAV",
    label: "Z",
  },
  {
    className: "drum-pad",
    id: "CRASH2",
    src: "/audio/real-life-CRASH2.WAV",
    label: "X",
  },
  {
    className: "drum-pad",
    id: "RIM",
    src: "/audio/real-life-RIM.WAV",
    label: "C",
  },
];

function DrumPads({ clipName, active, onClick }) {
  return (
    <div className="drum-pads">
      {BankA.map((clip) => {
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
          />
        );
      })}
    </div>
  );
}

export default DrumPads;
