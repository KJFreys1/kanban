import React, { useState, useEffect, useRef } from "react";
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'
import TextareaAutosize from 'react-textarea-autosize'
import Card from "./Card"

function Column(props) {
  const [info, setInfo] = useState("")
  const [title, setTitle] = useState(props.column.title)
  const [staticTitle, setStaticTitle] = useState(true)
  const [showButton, setShowButton] = useState(false)
  const [hoverStyle, setHoverStyle] = useState({ backgroundColor: props.pref.color.bgSecondary })
  const [textOffset, setTextOffset] = useState({ color: props.pref.color.text })
  const [textFocus, setTextFocus] = useState(false)

  useEffect(() => {
    setHoverStyle({ backgroundColor: props.pref.color.bgSecondary })
    setTextOffset({ color: props.pref.color.text })
  }, [props.pref])

  const scrollRef = useRef(null)

  const inputRef = useRef(null);

  const handleNewCardSelect = () => {
    setStaticTitle(true)
    props.toggleModal({ column: props.column })
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

  const handleReorderNewestSelect = () => {
    const newData = {
      column: {
        id: props.column.id
      }
    }
    props.handleReorderList(newData, "newest")
  }

  const handleReorderOldestSelect = () => {
    const newData = {
      column: {
        id: props.column.id
      }
    }
    props.handleReorderList(newData, "oldest")
  }

  const handleStaticToggle = () => {
    setStaticTitle(false)
  }

  const handleBlur = () => {
    setStaticTitle(true)
    setTitle(props.column.title)
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
    if (e) e.preventDefault()

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

  const handleTextFocus = () => {
    setShowButton(true)
    setTextOffset({ color: props.pref.color.cardText })
    setTextFocus(true)
  }

  const handleTextBlur = () => {
    setShowButton(false)
    setTextOffset({ color: props.pref.color.text })
    setTextFocus(false)
    handleSubmit()
  }

  const handleTextHover = () => {
    setTextOffset({ color: props.pref.color.cardText })
  }

  const handleTextUnhover = () => {
    if (!textFocus) setTextOffset({ color: props.pref.color.text })
  }

  useEffect(() => {
    if (showButton) scrollRef.current.scrollIntoView({ behavior: "smooth" })
  }, [showButton])

  useEffect(() => {
    if (!staticTitle) inputRef.current.focus()
  }, [staticTitle])

  const formTitle = (
    <form onSubmit={handleTitleSubmit}>
      <input ref={inputRef} className="col-title-input" type="text" value={title} onChange={handleChangeTitle} onBlur={handleBlur}></input>
    </form>
  )

  const submitBtn = (
    <button type="submit" style={{ backgroundColor: props.pref.color.highlight }}>Submit</button>
  )

  const colStyle = {
    backgroundColor: props.pref.color.bgSecondary
  }

  return (
    <Draggable
      draggableId={props.column.id}
      index={props.index}
    >
      {(provided) => {
        const otherProps = {
          ...provided.draggableProps,
          style: {
            ...provided.draggableProps.style,
            ...colStyle,
          }
        }
        return (
          <div
            className="column"
            {...otherProps}
            ref={provided.innerRef}
          >
            <header
              {...provided.dragHandleProps}
              className="my-col-head"
            >
              {staticTitle
                ? <h1 className="col-title" onClick={handleStaticToggle}>{props.column.title}</h1>
                : formTitle
              }
              <span className="spacer" />
              <div className="dropdown">
                <button
                  className="dropbtn"
                  style={{ ...hoverStyle, color: props.pref.color.text }}
                  onMouseOver={() => setHoverStyle({ backgroundColor: props.pref.color.bgPrimary })}
                  onMouseOut={() => setHoverStyle({ backgroundColor: props.pref.color.bgSecondary })}
                >...</button>
                <div className="dropdown-content">
                  <div className="drop-select" onClick={handleNewCardSelect}>New Card</div>
                  <div className="drop-select" onClick={handleStaticToggle}>Edit List</div>
                  <div className="drop-select" onClick={handleDeleteListSelect}>Discard List</div>
                  <div className="drop-break"></div>
                  <div className="drop-select" onClick={handleReorderNewestSelect}>Newest First</div>
                  <div className="drop-select" onClick={handleReorderOldestSelect}>Oldest First</div>
                </div>
              </div>
            </header>

            <div className="t-container-outer">
              <Droppable
                droppableId={props.column.id}
                type="task"
              >
                {(provided) => (
                  <div
                    className="t-container"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {props.tasks.map((task, i) => (
                      <Card
                        key={task.id}
                        pref={props.pref}
                        task={task}
                        index={i}
                        column={props.column}
                        columnIndex={props.index}
                        numColumns={props.numColumns}
                        handleMoveCard={props.handleMoveCard}
                        handleEditCard={props.handleEditCard}
                        handleDeleteCard={props.handleDeleteCard}
                        toggleModal={props.toggleModal}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <span className="spacer"></span>
            <form className="new-card-form" style={{ backgroundColor: props.pref.color.bgSecondary }} onSubmit={handleSubmit}>
              <TextareaAutosize
                value={showButton || info.length > 0 ? info : "+ Add new card"}
                placeholder="+ Add new card"
                style={{ border: `1px solid ${props.pref.color.bgSecondary}`, ...textOffset }}
                onChange={handleInfoChange}
                onFocus={handleTextFocus}
                onBlur={handleTextBlur}
                onMouseOver={handleTextHover}
                onMouseLeave={handleTextUnhover}
              />
              {showButton ? submitBtn : null}
            </form>
            <span ref={scrollRef} ></span>
          </div>
        )
      }}
    </Draggable>
  )
}

export default Column