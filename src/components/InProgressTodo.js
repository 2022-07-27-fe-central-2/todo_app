import { useEffect, useState } from "react"

export const InProgressTodo = (props) => {
  const [notesText, setNotesText] = useState('')

  const onUpdateNotes = (e) => {
    e.preventDefault()
    const updatingTodo = {...props.inProgressTodo, notes: notesText }
    const inProgressTodos = props.todos.inProgressTodos.map(
      (inProgressTodo) => inProgressTodo.id === updatingTodo.id
      ? updatingTodo
      : inProgressTodo
    )
    props.setTodos({
      ...props.todos,
      inProgressTodos
    })
  }

  useEffect(() => {
    setNotesText(props.inProgressTodo.notes)
  }, [props.inProgressTodo.notes])

  const onChangeToComplete = (e) => {
    e.preventDefault()
    const changingTodo = {...props.inProgressTodo, status: 'complete'}
    const inProgressTodos = props.todos.inProgressTodos.filter((inProgressTodo) => inProgressTodo.id !== changingTodo.id)
    props.setTodos({
      ...props.todos,
      inProgressTodos,
      completedTodos: [...props.todos.completedTodos, changingTodo]
    })
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
        <button onClick={onUpdateNotes}>Update Notes</button>
      </form>
      <button onClick={onChangeToComplete}>change to complete</button>
    </div>
  )
}
