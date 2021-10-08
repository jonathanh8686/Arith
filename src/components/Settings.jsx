import React, { useState } from 'react'


export const Settings = (props) => {

    const [minAdd, setMinAdd] = useState(0);
    const [maxAdd, setMaxAdd] = useState(120)

    const [minMultiply, setMinMultiply] = useState(0)
    const [maxMultiply, setMaxMultiply] = useState(120)

    const [add, setAdd] = useState(true)
    const [subtract, setSubtract] = useState(true)
    const [multiply, setMultiply] = useState(true)
    const [divide, setDivide] = useState(true)

    function minAddRangeChanged(e) {
        setMinAdd(e.target.value);
    }

    function maxAddRangeChanged(e) {
        setMaxAdd(e.target.value);
    }

    function minMultiplyRangeChanged(e) {
        setMinMultiply(e.target.value);
    }

    function maxMultiplyRangeChanged(e) {
        setMaxMultiply(e.target.value);
    }

    function toggleAdd(e) {
        if(subtract || multiply || divide)
        setAdd(!add);
    }

    function toggleSubtract(e) {
        if(add || multiply || divide)
        setSubtract(!subtract);
    }

    function toggleMultiply(e) {
        if(add || subtract || divide)
        setMultiply(!multiply);
    }

    function toggleDivide(e) {
        if(add || subtract || multiply)
        setDivide(!divide)

    }

    return (
        <div className="text-center">
            <h1 className="text-9xl p-10 text-5xl font-body">Arith</h1>
            <div className="grid grid-cols-4 pl-72 pr-72 pt-20 gap-5">
                <div>
                    <p className="text-2xl">Minimum for ➕ and ➖</p>
                    <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128" type="range" value={minAdd} onChange={minAddRangeChanged} max={maxAdd} min="0"></input>
                    <p className="mb-7">{minAdd}</p>
                </div>

                <div>
                    <p className="text-2xl">Maximum for ➕ and ➖</p>
                    <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128" type="range" value={maxAdd} onChange={maxAddRangeChanged} max="200" min={minAdd}></input>
                    <p className="mb-7">{maxAdd}</p>
                </div>


                <button className={"transition duration-300 ease-in-out border-4 text-5xl " + (add ? "border-green-400" : "border-red-400")} onClick={toggleAdd}> ➕ </button>
                <button className={"transition duration-300 ease-in-out border-4 text-5xl " + (subtract ? "border-green-400" : "border-red-400")} onClick={toggleSubtract}>➖</button>

                <div>
                    <p className="text-2xl">Minimum for ✖️ and ➗</p>
                    <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128" type="range" value={minMultiply} onChange={minMultiplyRangeChanged} max={maxMultiply} min="0"></input>
                    <p className="mb-7">{minMultiply}</p>
                </div>

                <div>
                    <p className="text-2xl">Maximum for ✖️ and ➗</p>
                    <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128" type="range" value={maxMultiply} onChange={maxMultiplyRangeChanged} max="200" min={minMultiply}></input>
                    <p className="mb-7">{maxMultiply}</p>
                </div>


                <button className={"transition duration-300 ease-in-out border-4 text-5xl " + (multiply ? "border-green-400" : "border-red-400")} onClick={toggleMultiply} >✖️</button>
                <button className={"transition duration-300 ease-in-out border-4 text-5xl " + (divide ? "border-green-400" : "border-red-400")} onClick={toggleDivide}>➗</button>

            </div>
                <button className="text-7xl border-2 border-black rounded-xl pt-5 pb-5 pl-10 pr-10 mt-56 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Start</button>




        </div>
    )
}
