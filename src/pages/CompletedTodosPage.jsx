import { useEffect, useState } from "react"
import { CompletedTodosList } from "../components/CompletedTodosList"
import { getAllTodosByStatus } from "../utils/fetch_api_funcs"
import { useSelector } from 'react-redux';

export const CompletedTodosPage = () => {
  // const [completedTodos, setCompletedTodos] = useState([])
  const todos = useSelector((state)=>state.todos.todos.filter(todo => todo.status === 'complete'))
  // useEffect(() => {
  //   getAllTodosByStatus(setCompletedTodos, 'complete')
  // }, [])

  return (
    <div>
      <h2>Completed Todos Page</h2>
      {/* <CompletedTodosList completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} /> */}
      <CompletedTodosList completedTodos={todos} />
    </div>
  )
}
