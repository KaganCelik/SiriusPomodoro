import { useState } from 'react';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Pomodoro from './Pomodoro';
import Shortbreak from './ShortBreak';
import Longbreak from './LongBreak';
import './index.css';

function Focus() {
        const [selectedButton, setSelectedButton] = useState(1);

        const handleClick = (onClick) => {
            setSelectedButton(onClick);
        };

        return (
        <div>
            <div className='selector-button-container'>
                <IoMdArrowDropdownCircle size={50} className='selector-button' onClick={() => handleClick(1)}/>
                <IoMdArrowDropdownCircle size={50} className='selector-button' onClick={() => handleClick(2)}/>
                <IoMdArrowDropdownCircle size={50} className='selector-button' onClick={() => handleClick(3)}/>
            </div>

            {selectedButton === 1 && <Pomodoro />}
            {selectedButton === 2 && <Shortbreak />}
            {selectedButton === 3 && <Longbreak />}
        </div>
    )
}

export default Focus;