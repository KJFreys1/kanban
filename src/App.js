import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { v4 as uuidv4 } from 'uuid'
import Column from "./Column";
import CardInfo from "./modals/CardInfo"

import "./styles/style.css"

const D_COL = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out trash', description: ""},
    'task-2': {id: 'task-2', content: 'Clean dishes', description: ""},
    'task-3': {id: 'task-3', content: 'Take dogs out', description: ""},
    'task-4': {id: 'task-4', content: 'Make bed', description: "test"},
    'task-5': {id: 'task-5', content: 'Shower', description: ""},
    'task-6': {id: 'task-6', content: 'Laundry', description: ""}
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }, 
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-5', 'task-6']
    },
    'column-3': {
      id: 'column-3',
      title: 'Finished',
      taskIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
}

function App() {
  const [mainData, setMainData] = useState(D_COL)
  const [modal, setModal] = useState(false)
  const [modalDef, setModalDef] = useState()

  // const onDragStart = () => {
  //   document.body.style.color = "orange"
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
  
      const newColumn = {...start, taskIds: newTaskIds}
  
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

  const handleNewCard = newData => {
    const newState = {
      ...mainData,
      tasks: {
        ...mainData.tasks,
        [newData.card.id]: {
          id: newData.card.id,
          content: newData.card.content,
          description: newData.card.description
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

  const handleEditCard = newData => {
    const newState = {
      ...mainData,
      tasks: {
        ...mainData.tasks,
        [newData.card.id]: {
          id: newData.card.id,
          content: newData.card.content,
          description: newData.card.description
        }
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
  
  let display = mainData.columnOrder.map((colId, i) => {
    const column = mainData.columns[colId]
    const tasks = column.taskIds.map(taskId => mainData.tasks[taskId])

    return (
      <Column 
        key={column.id} 
        column={column} 
        tasks={tasks} 
        index={i} 
        handleNewCard={handleNewCard} 
        handleEditCard={handleEditCard}
        handleEditList={handleEditList}
        toggleModal={toggleModal}
      />
    )
  })

  return (
    <div id="dashboard">
      {modal 
        ? (
          <CardInfo 
            data={modalDef} 
            close={toggleModal} 
            addCard={handleNewCard}
            editCard={handleEditCard}
          />
        ) : null}
      <header className="dash-header">
        <button onClick={handleNewList}>Add List</button>
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
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default App;
