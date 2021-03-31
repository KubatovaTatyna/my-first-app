import { useState } from "react";
import Countdown from "./Components/Countdown/Countdown";
import "./App.css";
import coin from "./img/coin.svg"
const App = () => {
  const [a, setA] = useState(randomNumber(50));
  const [b, setB] = useState(randomNumber(50));
  const [calc, setCalc] = useState(randomCalculation(3));
  const [answer, setAnswer] = useState("?");
  const [countdown, setCountdown] = useState(20);
  let [points , setPoints] = useState(0);


  function randomNumber(limit) {
    return Math.round(Math.random() * limit);
  }
  function randomCalculation(arr) {
    const calculations = ["+", "-", "*", "/"];
    return calculations[Math.round(Math.random() * arr)];
  }
  function restart() {
    setA(randomNumber(50));
    setB(randomNumber(50));
    setCalc(randomCalculation(3));
    setAnswer("?");
    setCountdown(20);
    setPoints(0);
  }
  function addPoints(count) {
    let newPoints = points + count;
    setPoints(newPoints);
  }
  function checkAnswer() {
    const i = a + b;
    const t = a - b;
    const v = a * b;
    const s = a / b;
    if (v == answer) {
      restart();
      addPoints(5)
    }
    else if (i == answer) {
      restart();
      addPoints(5)
    }
    else if (t == answer) {
      restart();
      addPoints(5)
    }
    else if (s == answer) {
      restart();
      addPoints(5)
    }
    else {
      alert("no")
    }
  }
  let userInput = null;
  if (countdown > 0) {
    userInput = (
      <>
        <input type="number" value={answer} onChange={({ target }) => setAnswer(target.value)} className="input" />
        <br />
        <button onClick={() => checkAnswer()} className="ok">Ok</button>
      </>
    )
  }
  else{
    userInput = (
      <>
      <strong>Game over</strong>
      <br />
      <button onClick={() => restart()} className="restart">Restart</button>
      </>
    )
  }
  return (
    <div className="App">
      <h1>{a} {calc} {b} = {answer}</h1>
      <h3><Countdown countdown={countdown} setCountdown={setCountdown} /></h3>
      {userInput}
      <br />
      <span>Your points:{points} <img src={coin} className="coin"/></span>
    </div>
  );
  
}

export default App;
