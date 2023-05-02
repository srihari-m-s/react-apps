import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const clip = document.getElementById("beep");
  const ele = document.getElementById("time-left");
  const cont = document.getElementById("cont");
  const btn1 = document.getElementsByClassName("control-buttons")[0];
  const btn2 = document.getElementsByClassName("control-buttons")[1];
  
  const [time, setTime] = useState(1500);
  const [isOn, setIsOn] = useState(false);
  const [blen, setBlen] = useState(5);
  const [slen, setSlen] = useState(25);
  const [display, setDisplay] = useState("Session");

  useEffect(() => {
    let interval; 
    if (isOn) {
      ele.classList.add("gold");
      cont.classList.add("border-gold");
      btn1.classList.add("gold");
      btn1.classList.add("gold");
      if (time < 0) {
        if (display === "Session") {
          setDisplay("Break");
          setTime(blen * 60);
        } else {
          setDisplay("Session");
          setTime(slen * 60);
        }
      }

      if (time === 0) {
        clip.play();
      }

      interval = setInterval(() => setTime(time - 1), 999);
      //console.log(time,mins,secs)
    }

    return () => clearInterval(interval);
  }, [time, isOn]);

  //Methods
  const startStop = () => {
    const ele = document.getElementById("time-left");
    if(isOn){
      ele.classList.add("start");      
    } else {
      ele.classList.remove("start");
    }
    setIsOn(!isOn);
  };

  const reset = () => {
    setIsOn(false);
    setTime(1500);
    setBlen(5);
    setSlen(25);
    setDisplay("Session");
    clip.load();
    ele.classList.remove("gold");
    cont.classList.remove("border-gold");
    btn1.classList.remove("gold");
    btn2.classList.remove("gold");
  };

  const breakInc = () => {
    setBlen((prev) => {
      if (prev < 60) {
        prev = prev + 1;
      }
      if (display === "Break") {
        setTime(prev * 60);
      }
      return prev;
    });
  };

  const breakDec = () => {
    setBlen((prev) => {
      if (prev > 1) {
        prev = prev - 1;
      }
      if (display === "Break") {
        setTime(prev * 60);
      }
      return prev;
    });
  };

  const sessInc = () => {
    setSlen((prev) => {
      if (prev < 60) {
        prev = prev + 1;
      }
      if (display === "Session") {
        setTime(prev * 60);
      }
      return prev;
    });
  };

  const sessDec = () => {
    setSlen((prev) => {
      if (prev > 1) {
        prev = prev - 1;
      }
      if (display === "Session") {
        setTime(prev * 60);
      }
      return prev;
    });
  };

  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);

  return (
    <div className="App">
      <div className="container" id="cont">
        <h1 id="name">25 + 5 Clock</h1>

        <div className="lengths">
          <div id="bl">
            <h2 id="break-label">Break Length</h2>
            <button onClick={breakInc} disabled={isOn} id="break-increment">
              <i className="material-icons">arrow_upward</i>
            </button>
            <h3 id="break-length">{blen}</h3>
            <button onClick={breakDec} disabled={isOn} id="break-decrement">
              <i className="material-icons">arrow_downward</i>
            </button>
          </div>

          <div id="sl">
            <h2 id="session-label">Session Length</h2>
            <button onClick={sessInc} disabled={isOn} id="session-increment">
              <i className="material-icons">arrow_upward</i>
            </button>
            <h3 id="session-length">{slen}</h3>
            <button onClick={sessDec} disabled={isOn} id="session-decrement">
              <i className="material-icons">arrow_downward</i>
            </button>
          </div>
        </div>

        <div className="clk-cont" id="clk-area">
          <h2 id="timer-label">{display}</h2>
          <p id="time-left">
            {mins.toString().padStart(2, "0")}:
            {secs.toString().padStart(2, "0")}
          </p>
        </div>

        <div className="controls">
          <button onClick={startStop} id="start_stop" className="control-buttons">
            <i className="material-icons">pause_circle_filled</i>
            <i className="material-icons">play_circle_filled</i>
          </button>
          <button onClick={reset} id="reset" className="control-buttons">
            <i className="material-icons">refresh</i>
          </button>
        </div>
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    </div>
  );
}


export default App;
