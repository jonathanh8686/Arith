import React, { useState } from 'react'


export const Game = (props) => {

    const [question, setQuestion] = useState("");

    function generateQuestion() {
        console.log(props.settings)
        const type = Math.floor(Math.random() * 4);
        if (type == 0) { // addition
            if (!props.settings["add"]) type += 1;
            else {
                let q1 = Math.floor(Math.random() * (props.settings["maxAdd"] - props.settings["minAdd"])) + props.settings["minAdd"]
                let q2 = Math.floor(Math.random() * (props.settings["maxAdd"] - props.settings["minAdd"])) + props.settings["minAdd"]
                setQuestion(q1 + " + " + q2)
            }
        }
        else if (type == 1) { // subtraction
            if (!props.settings["subtract"]) type += 1;
            else {
                let q1 = Math.floor(Math.random() * (props.settings["maxAdd"] - props.settings["minAdd"])) + props.settings["minAdd"]
                let q2 = Math.floor(Math.random() * (props.settings["maxAdd"] - props.settings["minAdd"])) + props.settings["minAdd"]
                setQuestion(Math.max(q1, q2) + " - " + Math.min(q1, q2))
            }
        }
        else if (type == 2) { // multiplication
            if (!props.settings["multiply"]) type += 1;
            else {
                let q1 = Math.floor(Math.random() * (props.settings["maxMultiply"] - props.settings["minMultiply"])) + props.settings["minMultiply"]
                let q2 = Math.floor(Math.random() * (props.settings["maxMultiply"] - props.settings["minMultiply"])) + props.settings["minMultiply"]
                while (q1 * q2 > 1000) {
                    // lol don't mind this
                    q1 = Math.floor(Math.random() * (props.settings["maxMultiply"] - props.settings["minMultiply"])) + props.settings["minMultiply"]
                    q2 = Math.floor(Math.random() * (props.settings["maxMultiply"] - props.settings["minMultiply"])) + props.settings["minMultiply"]
                }

                setQuestion(q1 + " * " + q2)

            }

        }
        else if (type == 3) { // division
            if (!props.settings["divide"]) type = 0;
            else {
                let q1 = Math.floor(Math.random() * (props.settings["maxMultiply"] - props.settings["minMultiply"])) + props.settings["minMultiply"]
                let qm2 = Math.floor(Math.random() * (props.settings["maxMultiply"] - props.settings["minMultiply"])) + props.settings["minMultiply"]
                while (q1 * qm2 > 1000 || q1 == 0) {
                    q1 = Math.floor(Math.random() * (props.settings["maxMultiply"] - props.settings["minMultiply"])) + props.settings["minMultiply"]
                    qm2 = Math.floor(Math.random() * (props.settings["maxMultiply"] - props.settings["minMultiply"])) + props.settings["minMultiply"]
                }
                setQuestion(qm2 * q1 + "/" + q1)

            }
        }


    }

    return (
        <div className="h-64 grid grid-rows-3 grid-flow-col gap-4 place-items-center">
            <div className="text-8xl">{question}</div>

            <input type="text" className="w-96 h-14 block mb-2 bg-gray-100 p-2 border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600" />

            <button onClick={generateQuestion}>Generate New Question</button>

        </div>
    )
}
