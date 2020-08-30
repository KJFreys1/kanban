import React from "react";
import { Draggable } from 'react-beautiful-dnd'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"

function Card(props, { pref }) {
    const handleMenuSelect = (e, data) => {
        data.action()
    }

    const handleEdit = () => {
        let newData = {
            card: {
                id: props.task.id,
                content: props.task.content,
                description: props.task.description,
                date: props.task.date
            },
            column: props.column
        }
        props.toggleModal(newData)
    }

    const handleDelete = () => {
        let newData = {
            card: {
                id: props.task.id,
                content: props.task.content,
                description: props.task.description
            },
            column: {
                id: props.column.id
            }
        }
        props.handleDeleteCard(newData)
    }

    const handleMoveRight = () => {
        props.handleMoveCard(props.task, props.columnIndex)
    }

    return (
        <>
            <ContextMenuTrigger id={props.task.id}>
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
                            onDoubleClick={handleEdit}
                        >
                            {/* <div className="handle" {...provided.dragHandleProps} /> */}
                            {props.task.content}
                        </div>
                    )}
                </Draggable>
            </ContextMenuTrigger>

            <ContextMenu id={props.task.id} className="context-menu">
                <MenuItem
                    className="context-item"
                    data={{ action: handleEdit, id: props.task.id }}
                    onClick={handleMenuSelect}
                >
                    Edit
                </MenuItem>
                <MenuItem
                    className="context-item"
                    data={{ action: handleDelete, id: props.task.id }}
                    onClick={handleMenuSelect}
                >
                    Delete
                </MenuItem>
                {props.columnIndex < props.numColumns-1
                    ? <MenuItem
                        className="context-item"
                        data={{ action: handleMoveRight, id: props.task.id }}
                        onClick={handleMenuSelect}
                    >
                        Move Right
                    </MenuItem>
                    : null}
            </ContextMenu>
        </>
    )
}

export default Card