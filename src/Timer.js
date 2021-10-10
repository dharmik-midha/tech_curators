import React from 'react';
import { useTime } from 'react-timer-hook';
import "bootstrap/dist/css/bootstrap.min.css";


const Timer = () => {
    const {
        seconds,
        minutes,
        hours,
      } = useTime({ format: '24-hour'});
    
      return (
        <>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </>
      );
}

export default Timer
