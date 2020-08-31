import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import ls from 'local-storage'
import TextareaAutosize from "react-textarea-autosize"

export default function CardInfo({
  data,
  close,
  addCard,
  editCard,
  deleteCard,
  pref,
}) {
  const [content, setContent] = useState(data.card ? data.card.content : "")
  const [description, setDescription] = useState(data.card ? data.card.description : "")
  const [image, setImage] = useState(data.card ? data.card.image : "")

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleDeleteBtn = () => {
    deleteCard(data)
    close()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content === "") {
      close()
      return
    }
    if (data.card) {
      const newCard = {
        card: {
          ...data.card,
          content,
          description,
          image,
          updated: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
        },
      }
      editCard(newCard)
    } else {
      const newData = {
        card: {
          id: uuidv4(),
          content,
          description,
        },
        column: {
          id: data.column.id,
        },
      }
      addCard(newData)
    }
    close()
  }

  const imageUpload = e => {
    const file = e.target.files[0]
    getBase64(file).then(base64 => {
      setImage(base64)
      // ls.set("image", base64)
      console.debug("file stored", base64)
    })
  }

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
      reader.readAsDataURL(file)
    })
  }

  return (
    <div className="card-modal-outer">
      <div className="card-modal-inner">
        <form className="card-modal-form" onSubmit={handleSubmit}>
          <div className="modal-top">
            <label htmlFor="content">From the {data.column.title} list:</label>
            <span className="spacer"></span>
            <div className="close-modal" onClick={close}>
              <span aria-hidden="true">&times;</span>
            </div>
          </div>
          <TextareaAutosize
            className="modal-ta-content"
            name="content"
            placeholder="Click to add content..."
            value={content}
            onChange={handleContentChange}
          />
          <label htmlFor="description">Description</label>
          <TextareaAutosize
            className="modal-ta-desc"
            name="description"
            placeholder="Click to add description..."
            value={description}
            onChange={handleDescriptionChange}
            minRows={2}
          />
          {data.card && data.card.date
            ? <p>Created on {data.card.date}</p>
            : null
          }
          {data.card && data.card.updated
            ? <p>Last edited on {data.card.updated}</p>
            : null
          }
          {data.card && data.card.image ? <img src={data.card.image} height={50} width={50} /> : null}
          <input
            type="file"
            id="imageFile"
            name='imageFile'
            onChange={imageUpload}
          />
          <div className="btn-container">
            <button
              className="submit-btn"
              type="submit"
              style={{ backgroundColor: pref.color.highlight }}
            >
              Save Information
            </button>
            {data.card ? (
              <button
                className="delete-btn"
                style={{ backgroundColor: pref.color.warning }}
                onClick={handleDeleteBtn}
              >
                Delete Card
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  )
}
