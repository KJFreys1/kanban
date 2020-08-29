import React from "react";
import { Draggable } from 'react-beautiful-dnd'

function Card(props) {
    // const handleChange = () => {
    //     let tempVar = [...props.columns]
    //     tempVar[props.colID].cards[props.cardID] = "new"
    //     props.change(tempVar)
    // }

    // return(
    //     <div>
    //         <p onClick={handleChange}>{props.data}</p>
    //     </div>
    // )

    return (
        <Draggable 
            draggableId={props.task.id} 
            index={props.index}
        >
            {(provided, snapshot) => (
                <div 
                    className={`t-box ${snapshot.isDragging 
                            ? "blue" 
                            : null
                    }`} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps} 
                    ref={provided.innerRef}
                    // isDragging={snapshot.isDragging}
                >
                    {/* <div className="handle" {...provided.dragHandleProps} /> */}
                    {props.task.content}
                </div>
            )}
        </Draggable>
    )
}

export default Card