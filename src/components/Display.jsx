import React from 'react'
import './Display.css'

function Display(props) {




    return (
        <div id="display">
            <span>{props.sound}</span><span>VOL {props.volume}</span> 
        </div>
    )
}

export default Display
