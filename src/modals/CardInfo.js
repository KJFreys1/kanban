import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function CardInfo({ data, close, addCard, editCard }) {
    const [content, setContent] = useState(data.card ? data.card.content : "")
    const [description, setDescription] = useState(data.card ? data.card.description : "")

    const handleContentChange = e => {
        setContent(e.target.value)
    }

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
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
                    <label htmlFor="content">Enter main content</label>
                    <textarea name="content" placeholder="Content..." value={content} onChange={handleContentChange}></textarea>
                    <label htmlFor="description">Enter desctiption</label>
                    <textarea name="description" placeholder="Description..." value={description} onChange={handleDescriptionChange}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    )
}