import {useState} from 'react';

export const CreateTodoForm = (props) => {
  const { todos, setTodos } = props
  const [todoText, setTodoText] = useState('')

  const submitNewTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Math.random(),
      text: todoText,
      notes: '',
      status: 'new'
    }
    setTodos({
      ...todos,
      newTodos: [...todos.newTodos, newTodo]
    })
    setTodoText('')
  }

  return (
    <form>
      <input
        placeholder="Todo Task..."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={submitNewTodo}>submit</button>
    </form>
  )
}
