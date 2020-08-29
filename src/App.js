import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd"

import "./styles/style.css"

const D_COL = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out trash'},
    'task-2': {id: 'task-2', content: 'Clean dishes'},
    'task-3': {id: 'task-3', content: 'Take dogs out'},
    'task-4': {id: 'task-4', content: 'Make bed'},
    'task-5': {id: 'task-5', content: 'Shower'},
    'task-6': {id: 'task-6', content: 'Laundry'}
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

  const handleNewCard = newData => {
    const newState = {
      ...mainData,
      tasks: {
        ...mainData.tasks,
        [newData.card.id]: {
          id: newData.card.id,
          content: newData.card.content
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


  let display = mainData.columnOrder.map((colId, i) => {
    const column = mainData.columns[colId]
    const tasks = column.taskIds.map(taskId => mainData.tasks[taskId])

    return <Column key={column.id} column={column} tasks={tasks} index={i} handleNewCard={handleNewCard} />
  })

  return (
    <div id="dashboard">
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
