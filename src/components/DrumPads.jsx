import realKick from '../assets/audio/bankA/real-life-KICK.wav'
import realSN1 from '../assets/audio/bankA/real-life-SN1.WAV'
import realTom1F from '../assets/audio/bankA/real-life-TOM1F.WAV'
import realTOM1L from '../assets/audio/bankA/real-life-TOM1L.WAV'
import realTOM2LAMBI from '../assets/audio/bankA/real-life-TOM2LAMBI.WAV'
import realRIDE from '../assets/audio/bankA/real-life-SN2.WAV'
import realCRASH1 from '../assets/audio/bankA/real-life-CRASH1.WAV'
import realCRASH2 from '../assets/audio/bankA/real-life-CRASH2.WAV'
import realRIM from '../assets/audio/bankA/real-life-RIM.WAV'
import SharpKICK from '../assets/audio/bankB/analog-sharp-kick.wav'
import SN from '../assets/audio/bankB/ec-sn022.wav'
import SLAP from '../assets/audio/bankB/kungfu-slap.wav'
import TONGUE from '../assets/audio/bankB/tongue-ripple-hit.wav'
import CLAP from '../assets/audio/bankB/Clap2.wav'
import STABS from '../assets/audio/bankB/stabs-hits-061.wav'
import STABS2 from '../assets/audio/bankB/stabs-hits-144.wav'
import CRASH from '../assets/audio/bankB/909-bright-crash.wav'
import SteelDrum from '../assets/audio/bankB/SteelDrum-vs.wav'


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



function DrumPads({ clipName, active, onClick, activeBank, theme, power, audioRef }) {

 const targetBank = activeBank === 'bankA'? BankA : BankB 

  return (
    <div className="drum-pads">
      {
      
      targetBank.map((clip) => {
        const className =
          clip.id === clipName && active
            ? 'drum-pad playing'
            : 'drum-pad';
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
            audioRef={audioRef}
            
          />
        );
      })}
    </div>
  );
}

export default DrumPads;
