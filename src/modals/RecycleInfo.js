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
            <div key={i}>
                <div>{column.title}</div>
                <div>Cards: {column.taskIds.length}</div>
                <button onClick={() => handleRetrieve(column)}>Retrieve List</button>
                <button onClick={() => handleRemove(column)}>Delete List</button>
            </div>
        )

    })

    return (
        <div className="card-modal-outer">
            <div className="card-modal-inner">
                {display}
                <button onClick={props.close}>Close</button>
            </div>
        </div>
    )
}