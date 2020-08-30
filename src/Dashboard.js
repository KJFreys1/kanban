import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { v4 as uuidv4 } from 'uuid'
import ls from 'local-storage'
import Column from "./Column";
import CardInfo from "./modals/CardInfo"
import RecycleInfo from "./modals/RecycleInfo"
import AlertClear from "./modals/AlertClear"

import "./styles/style.css"

const D_COL = {
  tasks: {},
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: []
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Finished',
      taskIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
  recycle: []
}

const colorSchemes = {
  mint: {
    text: "#081c15",
    bgPrimary: "#95d5b2",
    bgSecondary: "#d8f3dc",
    highlight: "#2d6a4f",
    warning: "#d00000"
  },
  ocean: {
    text: "#03045e",
    bgPrimary: "#00b4d8",
    bgSecondary: "#90e0ef",
    highlight: "#023e8a",
    warning: "#d00000"
  },
  punk: {
    text: "#ffffff",
    bgPrimary: "#002855",
    bgSecondary: "#f72585",
    cardText: "#001427",
    highlight: "#8900f2",
    warning: "red"
  },
  pallette: {
    text: "#0f4c5c",
    bgPrimary: "#d8e2dc",
    bgSecondary: "#f4acb7",
    highlight: "#9d8189",
    warning: "#d00000"
  }, 
  rustic: {
    text: "#2b2d42",
    bgPrimary: "#8a817c",
    bgSecondary: "#bcb8b1",
    highlight: "#463f3a",
    warning: "#d90429"
  }
}

const defPreferences = {
  color: colorSchemes.mint
}

function App() {
  const [mainData, setMainData] = useState(ls.get("mainData") || D_COL)
  const [preferences, setPreferences] = useState(ls.get("preferences") || defPreferences)
  const [modal, setModal] = useState(false)
  const [recycle, setRecycle] = useState(false)
  const [alertClear, setAlertClear] = useState(false)
  const [modalDef, setModalDef] = useState()
  const [hamburger, setHamburger] = useState(false)

  useEffect(() => {
    ls.set("mainData", mainData)
  }, [mainData])

  useEffect(() => {
    ls.set("preferences", preferences)
  }, [preferences])

  // const onDragStart = () => {

  // }

  // const onDragUpdate = update => {
  //   const { destination } = update
  //   const opacity = destination
  //     ? destination.index / Object.keys(mainData.tasks).length  
  //     : 0
  //   document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`
  //   }

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    if (type === "column") {
      const newColumnOrder = Array.from(mainData.columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState = {
        ...mainData,
        columnOrder: newColumnOrder
      }
      setMainData(newState)
      return
    }

    const start = mainData.columns[source.droppableId]
    const finish = mainData.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = { ...start, taskIds: newTaskIds }

      const newState = {
        ...mainData,
        columns: {
          ...mainData.columns,
          [newColumn.id]: newColumn
        }
      }

      setMainData(newState)
      return
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...mainData,
      columns: {
        ...mainData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    setMainData(newState)
  }

  const toggleModal = newData => {
    setModalDef(newData ? newData : null)
    setModal(prevState => !prevState)
  }

  const toggleRecycle = () => {
    setRecycle(prevState => !prevState)
  }

  const toggleAlertClear = () => {
    setAlertClear(prevState => !prevState)
  }

  const handleNewCard = newData => {
    const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    const newState = {
      ...mainData,
      tasks: {
        ...mainData.tasks,
        [newData.card.id]: {
          id: newData.card.id,
          content: newData.card.content,
          description: newData.card.description,
          date: utc
        }
      },
      columns: {
        ...mainData.columns,
        [newData.column.id]: {
          ...mainData.columns[newData.column.id],
          taskIds: [
            ...mainData.columns[newData.column.id].taskIds,
            newData.card.id
          ]
        }
      }
    }
    setMainData(newState)
  }

  const handleMoveCard = (task, index) => {
    const start = {...mainData.columns[mainData.columnOrder[index]]}
    const finish = {...mainData.columns[mainData.columnOrder[index+1]]}

    const newTasks = [...start.taskIds].filter(id => id !== task.id)
    
    finish.taskIds.push(task.id)

    const newState = {
      ...mainData,
      columns: {
        ...mainData.columns,
        [start.id]: {
          ...start,
          taskIds: newTasks
        },
        [finish.id]: finish
      }
    }
    setMainData(newState)
  }

  const handleEditCard = newData => {
    const newState = {
      ...mainData,
      tasks: {
        ...mainData.tasks,
        [newData.card.id]: {
          id: newData.card.id,
          content: newData.card.content,
          description: newData.card.description,
          date: newData.card.date
        }
      }
    }
    setMainData(newState)
  }

  const handleDeleteCard = newData => {
    const newColumn = { ...mainData.columns[newData.column.id] }
    newColumn.taskIds.splice(newColumn.taskIds.indexOf(newData.card.id), 1)

    const newTasks = { ...mainData.tasks }
    delete newTasks[newData.card.id]

    const newState = {
      ...mainData,
      tasks: newTasks,
      columns: {
        ...mainData.columns,
        [newData.column.id]: newColumn
      }
    }
    setMainData(newState)
  }

  const handleNewList = () => {
    let newId = uuidv4()
    const newState = {
      ...mainData,
      columns: {
        ...mainData.columns,
        [newId]: {
          id: newId,
          title: "Click to Edit",
          taskIds: []
        }
      },
      columnOrder: [
        ...mainData.columnOrder,
        newId
      ]
    }
    setMainData(newState)
  }

  const handleEditList = newData => {
    const newState = {
      ...mainData,
      columns: {
        ...mainData.columns,
        [newData.column.id]: {
          ...mainData.columns[newData.column.id],
          title: newData.column.title
        }
      }
    }
    setMainData(newState)
  }

  const handleDeleteList = newData => {
    const newColumnOrder = [...mainData.columnOrder].filter(id => id !== newData.column.id)

    const newRecycle = [...mainData.recycle]
    newRecycle.push(newData.column.id)

    const newState = {
      ...mainData,
      columnOrder: newColumnOrder,
      recycle: newRecycle
    }
    setMainData(newState)
  }

  const handleRetrieveList = newData => {
    const newRecycle = [...mainData.recycle].filter(id => id !== newData.column.id)

    const newColumnOrder = [...mainData.columnOrder]
    newColumnOrder.push(newData.column.id)

    const newState = {
      ...mainData,
      columnOrder: newColumnOrder,
      recycle: newRecycle
    }
    setMainData(newState)
  }

  const handleRemoveList = newData => {
    const newRecycle = [...mainData.recycle].filter(id => id !== newData.column.id)

    const newTasks = { ...mainData.tasks }
    const newColumns = { ...mainData.columns }
    newColumns[newData.column.id].taskIds.forEach(id => {
      delete newTasks[id]
    })
    delete newColumns[newData.column.id]

    const newState = {
      ...mainData,
      tasks: newTasks,
      columns: newColumns,
      recycle: newRecycle
    }
    setMainData(newState)
  }

  const toggleHamburger = () => {
    setHamburger(prevState => !prevState)
  }

  const handleNewListSelect = () => {
    setHamburger(false)
    handleNewList()
  }

  const handleRecycleSelect = () => {
    setHamburger(false)
    toggleRecycle()
  }

  const handlePreferenceSelect = newScheme => {
    setPreferences({...preferences, color: colorSchemes[newScheme]})
    setHamburger(false)
  }

  const handleClearSelect = () => {
    setHamburger(false)
    toggleAlertClear()
  }

  const clearData = () => {
    setMainData(D_COL)
  }

  let display = mainData.columnOrder.map((colId, i) => {
    const column = mainData.columns[colId]
    const tasks = column.taskIds.map(taskId => mainData.tasks[taskId])

    return (
      <Column
        key={column.id}
        pref={preferences}
        column={column}
        tasks={tasks}
        index={i}
        numColumns={mainData.columnOrder.length}
        handleNewCard={handleNewCard}
        handleMoveCard={handleMoveCard}
        handleEditCard={handleEditCard}
        handleDeleteCard={handleDeleteCard}
        handleEditList={handleEditList}
        handleDeleteList={handleDeleteList}
        toggleModal={toggleModal}
      />
    )
  })

  return (
    <div id="dashboard" style={{backgroundColor: preferences.color.bgPrimary, color: preferences.color.text}}>

      {modal
        ? (
          <CardInfo
            data={modalDef}
            pref={preferences}
            close={toggleModal}
            addCard={handleNewCard}
            editCard={handleEditCard}
            deleteCard={handleDeleteCard}
          />
        ) : null}
      {recycle
        ? (
          <RecycleInfo
            data={mainData}
            pref={preferences}
            close={toggleRecycle}
            retrieveList={handleRetrieveList}
            removeList={handleRemoveList}
          />
        )
        : null}

      <AlertClear 
        show={alertClear}
        close={toggleAlertClear}
        clear={clearData}
        pref={preferences}
      />

      <header className="dash-header" style={{backgroundColor: preferences.color.highlight}}>
        <div className="ham-drop">
          <div className={`hamburger ${hamburger ? "ham-active" : null}`} onClick={toggleHamburger}>
            <div className="ham-line ham1"></div>
            <div className="ham-line ham2"></div>
            <div className="ham-line ham3"></div>
          </div>
          <div className={`ham-content ${hamburger ? null : "ham-content-hide"}`}>
            <div className="ham-select" onClick={handleNewListSelect}>New List</div>
            <div className="ham-select" onClick={handleRecycleSelect}>Recylce Bin</div>
            <div className="ham-select ham-space">
              <div>Preferences</div>
              <div className="pref-content">
                <div className="ham-select" onClick={() => handlePreferenceSelect("mint")}>Mint</div>
                <div className="ham-select" onClick={() => handlePreferenceSelect("ocean")}>Ocean</div>
                <div className="ham-select" onClick={() => handlePreferenceSelect("punk")}>Punk</div>
                <div className="ham-select" onClick={() => handlePreferenceSelect("pallette")}>Pallette</div>
                <div className="ham-select" onClick={() => handlePreferenceSelect("rustic")}>Rustic</div>
              </div>
            </div>
            <div className="ham-select" onClick={handleClearSelect}>Clear Board</div>
          </div>
        </div>
      </header>

      <DragDropContext
        // onDragStart={onDragStart}
        // onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <div
              className="col-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {display}
              <div style={{width: "300px", minWidth: "300px"}}></div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  )
}

export default App;
