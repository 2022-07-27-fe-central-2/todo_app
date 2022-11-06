import { InProgressTodosList } from "../components/InProgressTodosList"

export const InProgressTodosPage = (props) => {
  return (
    <div>
      <h2>In Progress Todos Page</h2>
      <InProgressTodosList todos={props.todos} setTodos={props.setTodos} />
    </div>
  )
}
