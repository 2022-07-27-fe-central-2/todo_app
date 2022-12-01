import { InProgressTodo } from "./InProgressTodo"

export const InProgressTodosList = (props) => {

  return (
    <>
      {
        props.inProgressTodos.map((inProgressTodo, i) => (
          <InProgressTodo key={i} inProgressTodo={inProgressTodo} />
          ))
      }
    </>
  )
}
