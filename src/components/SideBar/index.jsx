import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCircleArrowLeft } from "react-icons/fa6";
import './index.css';

function Sidebar() {
    return (
        <div className='container'>
            <div className='sidebar'>
                <FaCircleArrowLeft className='arrow' size={30}/>
                <NavLink className='button' to={'/login'}><p>LOGIN</p></NavLink>
                <NavLink className='button' to={'/focus'}><p>FOCUS</p></NavLink>
                <NavLink className='button' to={'/hour'}><p>HOUR</p></NavLink>
                <NavLink className='button' to={'/tasks'}><p>TASKS</p></NavLink>
                <NavLink className='button' to={'/background'}><p>BACKGROUND</p></NavLink>
                <NavLink className='button' to={'/playlist'}><p>PLAYLIST</p></NavLink>
            </div>
        </div>
    );
}

export default Sidebar;