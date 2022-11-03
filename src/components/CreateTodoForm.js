import {useState} from 'react';

export const CreateTodoForm = (props) => {
  const { newTodos, setNewTodos } = props
  const [todoText, setTodoText] = useState('')

  const onInputChange = (e) => {
    // console.log(e.target.value)
    setTodoText(e.target.value)
  }

  const submitNewTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      text: todoText,
      notes: '',
      status: 'new'
    }
    setNewTodos([...newTodos, newTodo])
  }
  return (
    <form>
      <input
        placeholder="Todo Task..."
        onChange={onInputChange}
      />
      <button onClick={submitNewTodo}>submit</button>
    </form>
  )
}
