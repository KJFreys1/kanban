import React from "react"

export default function RecycleInfo(props) {
    const handleRetrieve = column => {
        const newData = { column }
        props.retrieveList(newData)
        props.close()
    }

    const handleRemove = column => {
        const newData = { column }
        props.removeList(newData)
    }

    const display = props.data.recycle.map((id, i) => {
        let column = props.data.columns[id]
        return (
            <div key={i} className="recycle-item">
                <div className="recycle-card-title">{column.title}</div>
                <span className="spacer"></span>
                <div className="recycle-card-num">Cards: {column.taskIds.length}</div>
                <button className="retrieve-btn" style={{ backgroundColor: props.pref.color.highlight }} onClick={() => handleRetrieve(column)}>Retrieve List</button>
                <button className="delete-btn" style={{ backgroundColor: props.pref.color.warning }} onClick={() => handleRemove(column)}>Delete List</button>
            </div>
        )

    })

    return (
        <div className="card-modal-outer">
            <div className="card-modal-inner">
                <div className="recycle-head">
                    <h1 className="recycle-title">Recycle Bin</h1>
                    <span className="spacer"></span>
                    <div className="close-modal" onClick={props.close}>
                        <span aria-hidden="true">&times;</span>
                    </div>
                </div>
                <div className="recycle-item-container">
                    {display}
                </div>
                {!display.length ? <p className="recycle-msg">Nothing in the recycle bin</p> : null}
            </div>
        </div>
    )
}