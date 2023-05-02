import React, {useState} from 'react';
import Text from './Text';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [num, setNum] = useState(0);

  function genRand(){
      setNum(num => num = Math.floor(Math.random() * 10));
  }

  const color_list = [
      "tomato",
      "blueviolet",
      "cornflowerblue",
      "indianred",
      "MediumAquaMarine",
      "MediumPurple",
      "Rebeccapurple",
      "sandybrown",
      "seagreen",
      "palevioletred"
    ];

  return (
      <div id="cont" style={{backgroundColor: color_list[num], transitionDuration: "2s"}}>
          <div id="quote-box" >
              <Text value={num} color={color_list[num]}/>
              
              <div id="buttons">
                  <button id="social"><a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer"><i className="fa fa-brands fa-twitter-square" style={{color: color_list[num], transitionDuration: "2s"}}></i></a></button>

                  <button id="social"><a id="tumblr-page" href="https://www.tumblr.com/register/bird?redirectTo=%2F" target="_blank" rel="noreferrer"><i className="fa fa-brands fa-tumblr-square" style={{color: color_list[num], transitionDuration: "2s"}}></i></a></button>
                  
              <div id="new-quote">
                  <button id="nqbutton" onClick={genRand} style={{backgroundColor: color_list[num], transitionDuration: "2s"}}>New Quote</button>
              </div>
              </div>
          </div>
      </div>
  );
}

export default App;