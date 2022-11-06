import { CreateTodoForm } from "../components/CreateTodoForm"

export const CreateTodoPage = (props) => {

  return (
    <div>
      <h2>Create Todo Page</h2>
      <CreateTodoForm todos={props.todos} setTodos={props.setTodos}/>
    </div>
  )
}
