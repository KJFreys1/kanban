import React, { useState } from "react";
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'
import Card from "./Card"

function Column(props) {
  const [info, setInfo] = useState("")

  const handleInfoChange = e => {
    setInfo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let newData = {
      card: {
        id: uuidv4(),
        content: info
      },
      column: {
        id: props.column.id
      }
    }
    props.handleNewCard(newData)
    setInfo("")
  }

  return (
    <Draggable 
      draggableId={props.column.id}
      index={props.index}
    >
      {(provided) => (
        <div 
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <header {...provided.dragHandleProps} className="col-header">
            <h1 className="col-title">{props.column.title}</h1>
            <span className="spacer"/>
            <button className="add-task-btn">+</button>
          </header>
          <Droppable 
            droppableId={props.column.id} 
            type="task"
          >
            {(provided, snapshot) => (
              <div 
                className={`t-container ${snapshot.isDraggingOver ? "gray" : null}`}
                ref={provided.innerRef} 
                {...provided.droppableProps}
                // isDraggingOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, idx) => <Card key={task.id} task={task} index={idx} />)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <form onSubmit={handleSubmit}>
            <textarea value={info} onChange={handleInfoChange}></textarea>
            <button type="sumbit">Submit</button>
          </form>
        </div>
      )}
    </Draggable>
  )
}

export default Column