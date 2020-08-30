import React from 'react'

export default function AlertClear(props) {
    const handleYes = () => {
        props.clear()
        props.close()
    }

    const handleNo = () => {
        props.close()
    }

    const alertStyle = {
        backgroundColor: props.pref.color.bgCard,
        color: props.pref.color.cardText
    }

    return (
        <div 
            className="alert-clear"
            style={props.show
                ? {...alertStyle, transform: "translateY(0)"}
                : {...alertStyle, transform: "translateY(-250px)", boxShadow: "none"}
            }
        >
            <h1>Are you sure you want to clear the board?</h1>
            <p>All information stored on this board will be lost forever.</p>
            <div className="alert-btn-grp">
                <button onClick={handleYes} style={{backgroundColor: props.pref.color.highlight}}>Yes</button>
                <button onClick={handleNo} style={{backgroundColor: props.pref.color.warning}}>No</button>
            </div>
        </div>
    )
}