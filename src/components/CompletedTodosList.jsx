import { CompletedTodo } from "./CompletedTodo"

export const CompletedTodosList = (props) => {

  return (
    <>
      {
        props.completedTodos.map((completedTodo, i) => (
          <CompletedTodo key={i} completedTodo={completedTodo} />
        ))
      }
    </>
  )
}
