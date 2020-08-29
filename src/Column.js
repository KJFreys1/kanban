import React, { useState, useEffect } from "react";
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'
import Card from "./Card"

function Column(props) {
  const [info, setInfo] = useState("")
  const [title, setTitle] = useState(props.column.title)
  const [staticTitle, setStaticTitle] = useState(true)

  const inputRef = React.createRef();

  const handleNewCardSelect = () => {
    setStaticTitle(true)
    props.toggleModal({ column: { id: props.column.id } })
  }

  const handleDeleteListSelect = () => {
    setStaticTitle(true)
    const newData = {
      column: {
        id: props.column.id
      }
    }
    props.handleDeleteList(newData)
  }

  const handleStaticToggle = () => {
    setStaticTitle(false)
  }

  const handleInfoChange = e => {
    setInfo(e.target.value)
  }

  const handleChangeTitle = e => {
    setTitle(e.target.value)
  }

  const handleTitleSubmit = e => {
    e.preventDefault()
    let newData = {
      column: {
        id: props.column.id,
        title
      }
    }
    props.handleEditList(newData)
    setStaticTitle(prevState => !prevState)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (info === "") return
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

  useEffect(() => {
    if (!staticTitle) inputRef.current.focus()
  }, [staticTitle])

  const formTitle = (
    <form onSubmit={handleTitleSubmit}>
      <input ref={inputRef} className="col-title-input" type="text" value={title} onChange={handleChangeTitle}></input>
    </form>
  )

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

          <header {...provided.dragHandleProps} className="my-col-head">
            {staticTitle
              ? <h1 className="col-title" onClick={handleStaticToggle}>{props.column.title}</h1>
              : formTitle
            }
            <span className="spacer" />
            {/* <button className="add-task-btn" onClick={handleButtonPress}>+</button> */}
            <div className="dropdown">
              <button className="dropbtn">{'>'}</button>
              <div className="dropdown-content">
                <div className="drop-select" onClick={handleNewCardSelect}>New Card</div>
                <div className="drop-select" onClick={handleStaticToggle}>Edit List</div>
                <div className="drop-select" onClick={handleDeleteListSelect}>Delete List</div>
                {/* <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a> */}
              </div>
            </div>
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
              >
                {props.tasks.map((task, idx) => (
                  <Card
                    key={task.id}
                    task={task}
                    index={idx}
                    column={props.column}
                    handleEditCard={props.handleEditCard}
                    handleDeleteCard={props.handleDeleteCard}
                    toggleModal={props.toggleModal}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <form className="new-card-form" onSubmit={handleSubmit}>
            <textarea value={info} onChange={handleInfoChange} placeholder="New card..."></textarea>
            <button type="sumbit">Submit</button>
          </form>

        </div>
      )}
    </Draggable>
  )
}

export default Column