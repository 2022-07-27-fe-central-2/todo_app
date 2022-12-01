import { useSelector } from "react-redux"
import { InProgressTodosList } from "../components/InProgressTodosList"

export const InProgressTodosPage = () => {

  const inProgressTodos = useSelector((state) => state.todos.todos.filter(todo => todo.status === 'inProgress'))

  return (
    <div>
      <h2>In Progress Todos Page</h2>
      <InProgressTodosList inProgressTodos={inProgressTodos} />
    </div>
  )
}
