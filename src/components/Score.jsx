import React, { useState, useEffect } from 'react'

export const Score = (props) => {

    return (
        <div className="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <h1 style={{fontSize: "45vw", opacity: 0.05}}>{props.score}</h1>
        </div>
    )
}
