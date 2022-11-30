import { useEffect, useState } from "react"
import { InProgressTodosList } from "../components/InProgressTodosList"
import { getAllTodosByStatus } from "../utils/fetch_api_funcs"
import { useSelector } from 'react-redux';

export const InProgressTodosPage = () => {
  // const [inProgressTodos, setInProgressTodos] = useState([])
  const todos = useSelector((state)=>state.todos.todos.filter(todo=>todo.status === 'inProgress'))
  // useEffect(() => {
  //   getAllTodosByStatus(setInProgressTodos, 'inProgress')
  // }, [])

  return (
    <div>
      <h2>In Progress Todos Page</h2>
      {/* <InProgressTodosList inProgressTodos={inProgressTodos} setInProgressTodos={setInProgressTodos} /> */}
      <InProgressTodosList inProgressTodos={todos} />
    </div>
  )
}
