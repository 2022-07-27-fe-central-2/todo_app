import { useEffect, useState } from "react"
import { CompletedTodo } from "./CompletedTodo"

export const CompletedTodosList = (props) => {

  const [completedTodos, setCompletedTodos] = useState([])

  useEffect(() => {
    setCompletedTodos(props.todos.completedTodos)
  }, [props.todos.completedTodos])

  return (
    <>
      {
        completedTodos.map((completedTodo, i) => (
          <CompletedTodo key={i} completedTodo={completedTodo} todos={props.todos} setTodos={props.setTodos} />
        ))
      }
    </>
  )
}
