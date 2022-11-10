import { useEffect, useState } from "react"
import { NewTodo } from "./NewTodo"

export const NewTodosList = (props) => {

  const [newTodos, setNewTodos] = useState([])

  useEffect(() => {
    setNewTodos(props.newTodos)
  }, [props.newTodos])

  return (
    <>
      {
        newTodos.map((newTodo, i) => (
          <NewTodo key={i} newTodo={newTodo} todos={props.todos} setTodos={props.setTodos} />
        ))
      }
    </>
  )
}
