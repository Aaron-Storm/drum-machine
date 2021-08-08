// TODO: EXPORT OLD CODE FOR SHOWCASING DIFFERENT APPROACH FOLLOWING CODE IS FROM DrumMachine.jsx 
  // const [power, setPower] = useState(false);
  // const [name, setName] = useState("WELCOME");
  // const [active, setActive] = useState(false);
  // const [bank, setBank] = useState("bankA");
  // const [volume, setVolume] = useState(50);

  // const audioRef = useRef([])

  // useEffect(() => {
  //   console.log("UseEffect Nr.1");
  //   function removeClass(e) {
  //     setTimeout(() => {
  //       setActive(false);
  //     }, 200);
  //   }

  //   const clips = Array.from(document.querySelectorAll(".clip"));

  //   clips.forEach((clip) => {
  //     // console.log(clip);
  //     clip.addEventListener("playing", removeClass);
  //   });
  //   // console.log(clips);
  //   return () => {
  //     window.removeEventListener("playing", removeClass);
  //   };
  // });

  // useEffect(() => {
  //   console.log("UseEffect Nr.2");

  //   const ctrlBtnHandler = (e) => {
  //     // console.log(e.currentTarget)
  //     // console.log(e.target)
  //     try {
  //       if (e.currentTarget.classList.contains("bankA")) {
  //         setBank("bankA");
  //       } else if (e.currentTarget.classList.contains("bankB")) {
  //         setBank("bankB");
  //       } else if (e.currentTarget.classList.contains("pwr")) {
  //         setPower(!power);
  //         console.log("power toggle");
  //       }
  //     } catch (error) {}
  //   };

  //   // const playAudio = (e) => {
  //   //   // console.log(e.eventPhase)
  //   //   if (e.type === "click" && power) {
  //   //     let myTarget = e.currentTarget;

  //   //     const audio = document.querySelector(
  //   //       `audio[id="${myTarget.firstChild.id}"]`
  //   //     );

  //   //     // const testAudio = audioRef;
  //   //     // console.log(testAudio.current)
  //   //     // console.log(myTarget)

  //   //     if (!audio) return;

  //   //     // const audioPromise = audio.play();

  //   //     audio.currentTime = 0;
  //   //     audio.volume = volume / 100;

  //   //     // if(audioPromise !== undefined) {
  //   //     //   audioPromise.then(function() {
  //   //     //     console.log('audio is playing');
  //   //     //   }).catch(error => console.log('error'))
  //   //     // }
  //   //     audio.play();
  //   //     setName(myTarget.id);
  //   //     setActive(true);
  //   //   }

  //   //   if (e.type === "keydown" && power) {
  //   //     try {
  //   //       let keyCode = e.key.toUpperCase();
  //   //       const audio = document.querySelector(`audio[id="${keyCode}"]`);

  //   //       if (!audio.id) return "This key is not available";
  //   //       // console.log(!audio.id);

  //   //       if (keyCode === audio.id) {
  //   //         audio.currentTime = 0;
  //   //         audio.volume = volume / 100;
  //   //         audio.play();

  //   //         setName(audio.parentElement.id);
  //   //         setActive(true);
  //   //       }
  //   //     } catch (error) {
  //   //       console.log("This key is not available");
  //   //     }
  //   //   }
  //   // };

  //   const btns = document.querySelectorAll(".ctrlBtn");
  //   btns.forEach((btn) => {
  //     btn.addEventListener("click", ctrlBtnHandler);
  //   });

  //   // const pads = document.querySelectorAll(".drum-pad");
  //   // pads.forEach((pad) => {
  //   //   pad.addEventListener("click", playAudio);
  //   // });

  //   // window.addEventListener("keydown", playAudio);
  //   return () => {
  //     btns.forEach((btn) => {
  //       btn.removeEventListener("click", ctrlBtnHandler);
  //     });

  //     // pads.forEach((pad) => {
  //     //   pad.removeEventListener("click", playAudio);
  //     // });

  //     // window.removeEventListener("keydown", playAudio);
  //   };
  // }, [bank, volume, power]);

  // function handleVolume(e) {
  //   let volumeSlider = e.currentTarget.value;
  //   console.log(volumeSlider);
  //   setVolume(volumeSlider);
  // }

  // function playAudioTest(e) {

  //   for (let i = 0; i < audioRef.current.length; i++) {
  //     if (e.currentTarget.firstChild.id === audioRef.current[i].id) {

  //       audioRef.current[i].currentTime = 0;
  //       audioRef.current[i].volume = volume / 100;
  //       audioRef.current[i].play()
  //       setName(e.currentTarget.id);
  //       setActive(true);
  //   }
  //   }

  // }


  // OLD APPROACH FROM App.jsx

  // useEffect(() => {
  //   console.log("UseEffect Nr.2");

  //   const ctrlBtnHandler = (e) => {
  //     // console.log(e.currentTarget)
  //     // console.log(e.target)
  //     try {
  //       if (e.currentTarget.classList.contains("bankA")) {
  //         setBank("bankA");
  //       } else if (e.currentTarget.classList.contains("bankB")) {
  //         setBank("bankB");
  //       } else if (e.currentTarget.classList.contains("pwr")) {
  //         setPower(!power);
  //         console.log("power toggle");
  //       }
  //     } catch (error) {}
  //   };

  //   const btns = document.querySelectorAll(".ctrlBtn");
  //   btns.forEach((btn) => {
  //     btn.addEventListener("click", ctrlBtnHandler);
  //   });

  //   return () => {
  //     btns.forEach((btn) => {
  //       btn.removeEventListener("click", ctrlBtnHandler);
  //     });
  //   };
  // }, [bank, volume, power]);
