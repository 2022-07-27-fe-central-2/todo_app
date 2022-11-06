import { useEffect, useState } from "react"
import { InProgressTodo } from "./InProgressTodo"

export const InProgressTodosList = (props) => {

  const [inProgressTodos, setInProgressTodos] = useState([])

  useEffect(() => {
    setInProgressTodos(props.todos.inProgressTodos)
  }, [props.todos.inProgressTodos])

  return (
    <>
      {
        inProgressTodos.map((inProgressTodo, i) => (
          <InProgressTodo key={i} inProgressTodo={inProgressTodo} todos={props.todos} setTodos={props.setTodos} />
          ))
      }
    </>
  )
}
