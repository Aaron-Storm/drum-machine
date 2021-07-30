import classNames from 'classnames'
import './Display.css'



function Display({sound, volume, power}) {

    let displayClass = classNames('display', {
        'off': !power,
    })
    let displayText = classNames({
        'hiddenDisplay': !power
    })


    return (
        <div className={displayClass} id="display">
            <span className={displayText}>{sound}</span><span className={displayText}>VOL {volume}</span> 
        </div>
    )
}

export default Display
