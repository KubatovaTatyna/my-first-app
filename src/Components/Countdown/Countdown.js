import { useEffect } from "react";
import classes from "./Countdown.module.css";
import timer from "../../img/timer.svg"
const Countdown = ({ countdown, setCountdown }) => {
  useEffect(() => {
    if (!countdown) return;
    
    const interval = setInterval(function() {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(interval);   
  }, [countdown]);
  return (
    <div className={classes.Countdown}><img src={timer} className={classes.timer}/>:{countdown} s</div>
  );
}
export default Countdown;