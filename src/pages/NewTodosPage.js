import { NewTodosList } from '../components/NewTodosList';

export const NewTodosPage = (props) => {
  return (
    <div>
      <h2>New Todos Page</h2>
      <NewTodosList newTodos={props.newTodos}/>
    </div>
  )
}
