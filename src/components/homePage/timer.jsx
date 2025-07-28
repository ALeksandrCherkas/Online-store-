import { useState, useEffect } from "react"

function renderDigits(number) {
    return String(number).padStart(2, '0').split('').map((digit, i) => (
      <span key={i}>{digit}</span>
    ));
  }

function Timer(){
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = 2*24*3600*1000+12*3600*1000+30*60*1000 + Date.now();

    const getTime = () => {
        const time = deadline - Date.now();
        setDays(Math.floor(time / (1000*60*60*24)));
        setHours(Math.floor((time / (1000*60*60)) % 24));
        setMinutes(Math.floor((time / 1000/60) % 60));
        setSeconds(Math.floor((time / 1000) %60));

        
    };

    useEffect(()=> {
        const interval = setInterval(()=>getTime(deadline),1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <div className="timer__block">{renderDigits(days)}<h1>:</h1></div>
            <div className="timer__block">{renderDigits(hours)}<h1>:</h1></div>
            <div className="timer__block">{renderDigits(minutes)}<h1>:</h1></div>
            <div id="seconds" className="timer__block">{renderDigits(seconds)}</div>
        </div>
    );
}
export default Timer