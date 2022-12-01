import { NewTodo } from "./NewTodo"

export const NewTodosList = (props) => {

  return (
    <>
      {
        props.newTodos.map((newTodo, i) => (
          <NewTodo key={i} newTodo={newTodo} />
        ))
      }
    </>
  )
}
