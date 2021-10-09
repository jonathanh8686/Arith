import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Score } from './Score';
import { useTimer } from 'react-timer-hook';


export const EndScreen = (props) => {
    return (
        <div className="h-64 grid grid-rows-3 grid-flow-col gap-7 place-items-center">
            <p className="text-9xl">Game Over!</p>
            <p className="text-7xl">Your score was: {props.score}</p>
            <button className="text-7xl border-2 border-black rounded-xl pt-5 pb-5 pl-10 pr-10 mt-56 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" onClick={props.resetGame}>Return to Home</button>
        </div>
    )
}
