import React from 'react';
import { useState } from 'react';
import './Room.css'

const Room = () => {
    let [isLit, setLit] = useState(true);
    let [temp, setTemp] = useState(25);
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            The Room is {isLit ? "lit" : "dark"}
            <br />
            <button onClick = { () => {setLit(true)}}>ON</button>
            <button onClick = { () => {setLit(false)}}>OFF</button>
            <br />
            <br />
            Temperature is {temp} 
            <br />
            <button onClick = { () => {setTemp(--temp)}}>-</button>
            <button onClick = { () => {setTemp(++temp)}}>+</button>
        </div>
    )
}

export default Room
