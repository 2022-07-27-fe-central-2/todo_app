import { useEffect, useState } from "react"
import { updateTodo } from "../utils/fetch_api_funcs"

export const InProgressTodo = (props) => {
  const [notesText, setNotesText] = useState('')

  useEffect(() => {
    setNotesText(props.inProgressTodo.notes)
  }, [props.inProgressTodo.notes])

  const updateNotes = (e) => {
    e.preventDefault()
    updateTodo({...props.inProgressTodo, notes: notesText})
  }

  return (
    <div style={{ height: '20rem', width: '20rem', border: '1px solid red'}}>
      <p>
        status: {props.inProgressTodo.status}
      </p>
      <p>
        text: {props.inProgressTodo.text}
      </p>
      <form>
        <label htmlFor='notesTextArea'>
          notes:{' '}
        </label>
        <textarea
          name='notesTextArea'
          placeholder='Notes for task...'
          onChange={(e) => setNotesText(e.target.value)}
          value={notesText}
        />
        <button onClick={updateNotes}>Update Notes</button>
      </form>
      <button onClick={()=> props.onChangeToComplete(props.inProgressTodo)}>change to complete</button>
    </div>
  )
}
