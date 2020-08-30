import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TextareaAutosize from 'react-textarea-autosize';


export default function CardInfo({ data, close, addCard, editCard, deleteCard }) {
    const [content, setContent] = useState(data.card ? data.card.content : "")
    const [description, setDescription] = useState(data.card ? data.card.description : "")

    const handleContentChange = e => {
        setContent(e.target.value)
    }

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }

    const handleDeleteBtn = () => {
        deleteCard(data)
        close()
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (content === "") {
            close()
            return
        }
        if (data.card) {
            const newCard = {
                card: {
                    id: data.card.id,
                    content,
                    description
                }
            }
            editCard(newCard)
        } else {
            const newData = {
                card: {
                    id: uuidv4(),
                    content,
                    description
                },
                column: {
                    id: data.column.id
                }
            }
            addCard(newData)
        }
        close()
    }

    return (
        <div className="card-modal-outer">
            <div className="card-modal-inner">
                <form className="card-modal-form" onSubmit={handleSubmit}>
                    <div className="modal-top">
                        <label htmlFor="content">From the {data.column.title} list:</label>
                        <span className="spacer"></span>
                        <div className="close-modal" onClick={close}>X</div>
                    </div>
                    <TextareaAutosize className="modal-ta-content" name="content" placeholder="Click to add content..." value={content} onChange={handleContentChange} />
                    <label htmlFor="description">Description</label>
                    <TextareaAutosize className="modal-ta-desc" name="description" placeholder="Click to add description..." value={description} onChange={handleDescriptionChange} minRows={2} />
                    {data.card && data.card.date ? <p>Created on {data.card.date}</p> : <p></p>}
                    <div className="btn-container">
                        <button className="submit-btn" type="submit">Save Information</button>
                        {data.card ? <button className="delete-btn" onClick={handleDeleteBtn}>Delete Card</button> : null}
                    </div>
                </form>
            </div>
            
        </div>
    )
}