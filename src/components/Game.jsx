import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in';
import { Score } from './Score';
import { useTimer } from 'react-timer-hook';
import { EndScreen } from './EndScreen';


export const Game = (props) => {

    function getTimeout() {
        let to = new Date();
        to.setSeconds(to.getSeconds() + props.settings["seconds"])
        return to;
    }

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: getTimeout(), onExpire: gameEnd });

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState(0);
    const [score, setScore] = useState(0);
    const [showEndScreen, setShowEndScreen] = useState(false);

    useEffect(() => {
        generateQuestion()
    }, [])

    function gameEnd() {
        console.log("here!");
        setShowEndScreen(true);

    }

    function generateQuestion() {
        let type = Math.floor(Math.random() * 4);
        type = 3
        if (type == 0) { // addition
            if (!props.settings["add"]) type += 1;
            else {
                let q1 = Math.floor(Math.random() * (props.settings["maxAdd"] - props.settings["minAdd"])) + props.settings["minAdd"]
                let q2 = Math.floor(Math.random() * (props.settings["maxAdd"] - props.settings["minAdd"])) + props.settings["minAdd"]
                setQuestion(q1 + " + " + q2)
                setAnswer(q1 + q2)
            }
        }
        else if (type == 1) { // subtraction
            if (!props.settings["subtract"]) type += 1;
            else {
                let q1 = Math.floor(Math.random() * (props.settings["maxAdd"] - props.settings["minAdd"])) + props.settings["minAdd"]
                let q2 = Math.floor(Math.random() * (props.settings["maxAdd"] - props.settings["minAdd"])) + props.settings["minAdd"]
                setQuestion(Math.max(q1, q2) + " - " + Math.min(q1, q2))
                setAnswer(Math.max(q1, q2) - Math.min(q1, q2))
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
                setAnswer(q1 * q2)
            }

        }
        else if (type == 3) { // division
            if (!props.settings["divide"]) type = 0;
            else {
                let q1 = Math.floor(Math.random() * (props.settings["maxSmallDivide"] - props.settings["minSmallDivide"])) + props.settings["minSmallDivide"]
                let qm2 = Math.floor(Math.random() * (props.settings["maxDivide"] - props.settings["minDivide"])) + props.settings["minDivide"]
                console.log(qm2)
                while (q1 * qm2 > 1000 || q1 == 0) {
                    q1 = Math.floor(Math.random() * (props.settings["maxDivide"] - props.settings["minDivide"])) + props.settings["minDivide"]
                    qm2 = Math.floor(Math.random() * (props.settings["maxDivide"] - props.settings["minDivide"])) + props.settings["minDivide"]
                }
                setQuestion(qm2 * q1 + "/" + q1)
                setAnswer(qm2)
            }
        }
    }

    function answerChanged(e) {
        console.log(e.target.value)
        if (e.target.value == answer) {
            generateQuestion();
            e.target.value = "";
            setScore(score + 1);
        }
    }

    function reset() {
        setQuestion("");
        setAnswer(0);
        setScore(0)
        setShowEndScreen(0);
        props.reset();
    }

    return (
        <div>
            {!showEndScreen &&
                <div className="h-64 grid grid-rows-3 grid-flow-col gap-4 place-items-center">
                    <Score score={score}></Score>
                    <div className="text-8xl">{question}</div>
                    <input type="text" onChange={answerChanged} className="w-96 h-14 block mb-2 bg-gray-100 p-2 border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600" />
                </div>
            }
            {showEndScreen && <EndScreen score={score} resetGame={reset}></EndScreen>}

        </div>
    )
}
