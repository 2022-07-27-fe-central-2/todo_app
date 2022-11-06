import { CompletedTodosList } from "../components/CompletedTodosList"

export const CompletedTodosPage = (props) => {
  return (
    <div>
      <h2>Completed Todos Page</h2>
      <CompletedTodosList todos={props.todos} setTodos={props.setTodos} />
    </div>
  )
}
