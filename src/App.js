import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext, Droppable } from "react-beautiful-dnd"

import "./styles/style.css"

// const INIT_BOARD = [
//   {
//     title: "Todo",
//     cards: ["Test !"],
//   },
//   {
//     title: "Doing",
//     cards: ["Test 2"],
//   },
//   {
//     title: "Done",
//     cards: ["Test 3"],
//   },
// ];

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
    // 'column-3': {
    //   id: 'column-3',
    //   title: 'Finished',
    //   taskIds: []
    // }
  },
  columnOrder: ['column-1', 'column-2']
}

function App() {
  // const [colData, setcolData] = useState(INIT_BOARD);
  const [mainData, setMainData] = useState(D_COL)

  // const handleChange = newData => {
  //   setcolData(newData)
  // }

  // let columns = colData.map((el, i) => {
  //   return <Column key={i} colID={i} data={el} columns={INIT_BOARD} change={handleChange} />
      
  // });

  let display = mainData.columnOrder.map((colId, i) => {
    const column = mainData.columns[colId]
    const tasks = column.taskIds.map(taskId => mainData.tasks[taskId])

    return <Column key={column.id} column={column} tasks={tasks} index={i} />
  })

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
    document.body.style.color = "black"
    document.body.style.backgroundColor = "inherit"
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

  return (
    <DragDropContext
      // onDragStart={onDragStart}
      // onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div 
            className="f-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {display}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )

  // return (
  //   <div id="dashboard">
  //     <header></header>
  //     <div className="col-box">
  //       {columns}
  //     </div>
  //   </div>
  // )
}

export default App;
