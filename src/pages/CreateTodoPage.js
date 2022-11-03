import { CreateTodoForm } from "../components/CreateTodoForm"

export const CreateTodoPage = (props) => {

  return (
    <div>
      <h2>Create Todo Page</h2>
      <CreateTodoForm newTodos={props.newTodos} setNewTodos={props.setNewTodos}/>
    </div>
  )
}