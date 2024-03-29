import { useState, useEffect } from 'react';
import './index.css';

function Longbreak() {

        const [minutes, setMinutes] = useState(45);
        const [seconds, setSeconds] = useState(0);
        const [isActive, setIsActive] = useState(false);

        const startTimer = () => {
            setIsActive(true);
        };

        useEffect(() => {
            let timer;

            if(isActive) {
                timer = setInterval(() => {
                    if (seconds === 0) {
                        if (minutes === 0) {
                            clearInterval(timer);
                            setIsActive(false);
                            setMinutes(45);
                            setSeconds(0);
                            alert('Earned 1 point');
                        } else {
                            setMinutes((prevMinutes) => prevMinutes - 1);
                            setSeconds(59);
                        }
                    } else {
                        setSeconds((prevSeconds) => prevSeconds - 1);
                    }
                }, 1000);
            } else {
                clearInterval(timer);
            }
            return() => clearInterval(timer);
        }, [isActive, minutes, seconds]);


        return (
        <div className='card-container'>
            <div className='pomodoro-card'>
                <div className='selection'>
                    <button id='selection-btn' type='button'>POMODORO</button>
                    <button id='selection-btn' type='button'>SHORT BREAK</button>
                    <button id='selection-btn-long-break' type='button'>LONG BREAK</button>
                </div>
                <div className='bottom'>
                    <p id='pomodoro-clock'>{minutes}:{seconds}</p>
                    <button id='start-btn' type='button' onClick={startTimer}>START</button>
                </div>
            </div>
        </div>
    )
}

export default Longbreak;