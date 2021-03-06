import React, { useState, useEffect } from 'react'


export const Settings = (props) => {

    const [minAdd, setMinAdd] = useState(0);
    const [maxAdd, setMaxAdd] = useState(120)

    const [maxDivide, setMaxDivide] = useState(120)
    const [maxMultiply, setMaxMultiply] = useState(120)

    const [add, setAdd] = useState(true)
    const [subtract, setSubtract] = useState(true)
    const [multiply, setMultiply] = useState(true)
    const [divide, setDivide] = useState(true)

    function updateSettings() {
        const settings = {
            "minAdd" : minAdd,
            "maxAdd" : maxAdd,
            "minDivide": 0,
            "maxDivide" : maxDivide,
            "maxSmallDivide": 12,
            "minSmallDivide": 0,
            "minMultiply" : 0,
            "maxMultiply" : maxMultiply,
            "add" : add,
            "subtract" : subtract,
            "multiply" : multiply,
            "divide" : divide,
            "seconds": 60
        }
        props.setSettings(settings);
    }

    function minAddRangeChanged(e) {
        setMinAdd(e.target.value);
        updateSettings();
    }

    function maxAddRangeChanged(e) {
        setMaxAdd(e.target.value);
        updateSettings();
    }

    function maxDivideRangeChanged(e) {
        setMaxDivide(e.target.value);
        updateSettings();
    }

    function maxMultiplyRangeChanged(e) {
        setMaxMultiply(e.target.value);
        updateSettings();
    }

    function toggleAdd(e) {
        if(subtract || multiply || divide)
        setAdd(!add);
        updateSettings();
    }

    function toggleSubtract(e) {
        if(add || multiply || divide)
        setSubtract(!subtract);
        updateSettings();
    }

    function toggleMultiply(e) {
        if(add || subtract || divide)
        setMultiply(!multiply);
        updateSettings();
    }

    function toggleDivide(e) {
        if(add || subtract || multiply)
        setDivide(!divide)
        updateSettings();

    }

    return (
        <div className="text-center">
            <h1 className="text-9xl p-10 text-5xl font-body">Arith</h1>
            <div className="grid grid-cols-4 pl-72 pr-72 pt-20 gap-5">
                <div>
                    <p className="text-2xl">Minimum for ??? and ???</p>
                    <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128" type="range" value={minAdd} onChange={minAddRangeChanged} max={maxAdd} min="0"></input>
                    <p className="mb-7">{minAdd}</p>
                </div>

                <div>
                    <p className="text-2xl">Maximum for ??? and ???</p>
                    <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128" type="range" value={maxAdd} onChange={maxAddRangeChanged} max="200" min={minAdd}></input>
                    <p className="mb-7">{maxAdd}</p>
                </div>


                <button className={"transition duration-300 ease-in-out border-4 text-5xl " + (add ? "border-green-400" : "border-red-400")} onClick={toggleAdd}> ??? </button>
                <button className={"transition duration-300 ease-in-out border-4 text-5xl " + (subtract ? "border-green-400" : "border-red-400")} onClick={toggleSubtract}>???</button>

                <div>
                    <p className="text-2xl">Maximum number in ???</p>
                    <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128" type="range" value={maxDivide} onChange={maxDivideRangeChanged} max="200" min="0"></input>
                    <p className="mb-7">{maxDivide}</p>
                </div>

                <div>
                    <p className="text-2xl">Maximum answer for ??????</p>
                    <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128" type="range" value={maxMultiply} onChange={maxMultiplyRangeChanged} max="200" min="0"></input>
                    <p className="mb-7">{maxMultiply}</p>
                </div>

                <button className={"transition duration-300 ease-in-out border-4 text-5xl " + (multiply ? "border-green-400" : "border-red-400")} onClick={toggleMultiply} >??????</button>
                <button className={"transition duration-300 ease-in-out border-4 text-5xl " + (divide ? "border-green-400" : "border-red-400")} onClick={toggleDivide}>???</button>

            </div>
                <button className="text-7xl border-2 border-black rounded-xl pt-5 pb-5 pl-10 pr-10 mt-56 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" onClick={()=>{props.setInGame(true); updateSettings()}}>Start</button>
        </div>
    )
}
