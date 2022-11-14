import {useState} from 'react';
import { createNewTodo } from '../utils/fetch_api_funcs';

export const CreateTodoForm = (props) => {
  const { todos, setTodos } = props
  const [todoText, setTodoText] = useState('')

  const submitNewTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      text: todoText,
      notes: '',
      status: 'new'
    }
    createNewTodo(newTodo);
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
