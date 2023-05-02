import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const LINKS = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
];

const TEXT = [
  "Heater 1",
  "Heater 2",
  "Heater 3",
  "Heater 4",
  "Clap",
  "Open-HH",
  "Kick-n`-hat",
  "Kick",
  "Closed-HH"
];

function App() {
  const [disp, setDisp] = useState(" ");
  const [power, setPower] = useState(false);

  const handlePowerChange = (checked) => {
    setPower(!checked);
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    const { key } = e;

    var ele = document.getElementById(`${key.toUpperCase()}`);
    if (ele != null) {
      ele.parentElement.classList.add("active");
      setTimeout(() => {
        ele.parentElement.classList.remove("active");
      },100);
      ele.parentElement.click();
    }
  };

  function playClip(eleId, text) {
    let x = document.getElementById(eleId);
    x.load();
    x.play();
    setDisp(text);
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="drum-grid">
          <button
            className="drum-pad"
            id="heater-1"
            onClick={() => playClip("Q", TEXT[0])}
            disabled={power}
          >
            <audio src={LINKS[0]} class="clip" id="Q" preload="auto"></audio>Q
          </button>
          <button
            className="drum-pad"
            id="heater-2"
            onClick={() => playClip("W", TEXT[1])}
            disabled={power}
          >
            <audio src={LINKS[1]} class="clip" id="W" preload="auto"></audio>W
          </button>
          <button
            className="drum-pad"
            id="heater-3"
            onClick={() => playClip("E", TEXT[2])}
            disabled={power}
          >
            <audio src={LINKS[2]} class="clip" id="E" preload="auto"></audio>E
          </button>
          <button
            className="drum-pad"
            id="heater-4"
            onClick={() => playClip("A", TEXT[3])}
            disabled={power}
          >
            <audio src={LINKS[3]} class="clip" id="A" preload="auto"></audio>A
          </button>
          <button
            className="drum-pad"
            id="clap"
            onClick={() => playClip("S", TEXT[4])}
            disabled={power}
          >
            <audio src={LINKS[4]} class="clip" id="S" preload="auto"></audio>S
          </button>
          <button
            className="drum-pad"
            id="open-hh"
            onClick={() => playClip("D", TEXT[5])}
            disabled={power}
          >
            <audio src={LINKS[5]} class="clip" id="D" preload="auto"></audio>D
          </button>
          <button
            className="drum-pad"
            id="kick-n-hat"
            onClick={() => playClip("Z", TEXT[6])}
            disabled={power}
          >
            <audio src={LINKS[6]} class="clip" id="Z" preload="auto"></audio>Z
          </button>
          <button
            className="drum-pad"
            id="kick"
            onClick={() => playClip("X", TEXT[7])}
            disabled={power}
          >
            <audio src={LINKS[7]} class="clip" id="X" preload="auto"></audio>X
          </button>
          <button
            className="drum-pad"
            id="closed-hh"
            onClick={() => playClip("C", TEXT[8])}
            disabled={power}
          >
            <audio src={LINKS[8]} class="clip" id="C" preload="auto"></audio>C
          </button>
        </div>

        <div className="controls">
          <div id="power-div">
            <input
              type="checkbox"
              role="switch"
              id="power-switch"
              onChange={(e) => handlePowerChange(e.target.checked)}
              defaultChecked="yes"
            />
            <label for="power-switch">
              Power
            </label>
          </div>
          <h4 id="display">{disp}</h4>
          <input type="range" step="2" className="vol-slider" />
          <div id="bank-div">
            <input
              type="checkbox"
              role="switch"
              id="bank-switch"
              disabled={true}
            />
            <label for="bank-switch">
              Bank
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;