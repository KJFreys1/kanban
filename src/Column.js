import React, { useState } from "react";
import { Draggable, Droppable } from 'react-beautiful-dnd'
import Card from "./Card"

function Column(props) {
  return (
    <Draggable 
      draggableId={props.column.id}
      index={props.index}
    >
      {(provided) => (
        <div 
          className="c-container"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h1 {...provided.dragHandleProps} className="c-title">{props.column.title}</h1>
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
        </div>
      )}
    </Draggable>
  )
  //   const [info, setInfo] = useState("")

  //   let cards = props.data.cards.map((el, i) => {
  //       return <Card key={`c${i}`} data={el} columns={props.columns} change={props.change} colID={props.colID} cardID={i}/>
  //   })

  //   const handleChange = e => {
  //     setInfo(e.target.value)
  //   }

  //   const handleSubmit = e => {
  //     e.preventDefault()
  //     let tempVar = [...props.columns]
  //     tempVar[props.colID].cards.push(info)
  //     props.change(tempVar)
  //   }


  // return (
  //   <div className="column">
  //     <div className="col-head">
  //       <h2 className="col-title">{props.data.title}</h2>
  //       <button>+</button>
  //     </div>
  //     <div className="col-content">
  //       { cards }
  //     </div>
  //     <form onSubmit={handleSubmit}>
  //       <textarea value={info} onChange={handleChange}></textarea>
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );
}

export default Column