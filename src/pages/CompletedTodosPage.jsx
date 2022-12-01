import { useSelector } from "react-redux"
import { CompletedTodosList } from "../components/CompletedTodosList"

export const CompletedTodosPage = () => {

  const completedTodos = useSelector((state) => state.todos.todos.filter(todo => todo.status === 'complete'))

  return (
    <div>
      <h2>Completed Todos Page</h2>
      <CompletedTodosList completedTodos={completedTodos} />
    </div>
  )
}
