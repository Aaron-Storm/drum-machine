import realKick from "../assets/audio/bankA/real-life-KICK.mp3";
import realSN1 from "../assets/audio/bankA/real-life-SN1.mp3";
import realTom1F from "../assets/audio/bankA/real-life-TOM1F.mp3";
import realTOM1L from "../assets/audio/bankA/real-life-TOM1L.mp3";
import realTOM2LAMBI from "../assets/audio/bankA/real-life-TOM2LAMBI.mp3";
import realRIDE from "../assets/audio/bankA/real-life-SN2.mp3";
import realCRASH1 from "../assets/audio/bankA/real-life-CRASH1.mp3";
import realCRASH2 from "../assets/audio/bankA/real-life-CRASH2.mp3";
import realRIM from "../assets/audio/bankA/real-life-RIM.mp3";
import SharpKICK from "../assets/audio/bankB/analog-sharp-kick.mp3";
import SN from "../assets/audio/bankB/ec-sn022.mp3";
import SLAP from "../assets/audio/bankB/kungfu-slap.mp3";
import TONGUE from "../assets/audio/bankB/tongue-ripple-hit.mp3";
import CLAP from "../assets/audio/bankB/Clap2.mp3";
import STABS from "../assets/audio/bankB/stabs-hits-061.mp3";
import STABS2 from "../assets/audio/bankB/stabs-hits-144.mp3";
import CRASH from "../assets/audio/bankB/909-bright-crash.mp3";
import SteelDrum from "../assets/audio/bankB/SteelDrum-vs.mp3";

import "./DrumPads.css";
import DrumPad from "./DrumPad";

const BankA = [
  {
    id: "KICK",
    src: realKick,
    label: "Q",
  },
  {
    id: "SN1",
    src: realSN1,
    label: "W",
  },
  {
    id: "TOM1F",
    src: realTom1F,
    label: "E",
  },
  {
    id: "TOM1L",
    src: realTOM1L,
    label: "A",
  },
  {
    id: "TOM2LAMBI",
    src: realTOM2LAMBI,
    label: "S",
  },
  {
    id: "RIDE",
    src: realRIDE,
    label: "D",
  },
  {
    id: "CRASH1",
    src: realCRASH1,
    label: "Z",
  },
  {
    id: "CRASH2",
    src: realCRASH2,
    label: "X",
  },
  {
    id: "RIM",
    src: realRIM,
    label: "C",
  },
];
const BankB = [
  {
    id: "SHARP KICK",
    src: SharpKICK,
    label: "Q",
  },
  {
    id: "SN",
    src: SN,
    label: "W",
  },
  {
    id: "SLAP",
    src: SLAP,
    label: "E",
  },
  {
    id: "TONGUE",
    src: TONGUE,
    label: "A",
  },
  {
    id: "CLAP",
    src: CLAP,
    label: "S",
  },
  {
    id: "STABS",
    src: STABS,
    label: "D",
  },
  {
    id: "STABS2",
    src: STABS2,
    label: "Z",
  },
  {
    id: "CRASH",
    src: CRASH,
    label: "X",
  },
  {
    id: "STEEL DRUM",
    src: SteelDrum,
    label: "C",
  },
];

function DrumPads({
  clipName,
  active,
  handleClick,
  activeBank,
  theme,
  power,
  audioRef,
  handlePlaying
  
}) {
  const targetBank = activeBank === "bankA" ? BankA : BankB;

  return (
    <div className="drum-pads">
      {targetBank.map((clip, index) => {
        const className =
          clip.id === clipName && active ? "drum-pad playing" : "drum-pad";
        return (
          <DrumPad
            className={className}
            src={clip.src}
            id={clip.id}
            key={clip.id}
            children={clip.label}
            handleClick={handleClick}
            handlePlaying={handlePlaying}
            theme={theme}
            power={power}
            index={index}
            audioRef={audioRef}
            
          />
        );
      })}
    </div>
  );
}

export default DrumPads;
