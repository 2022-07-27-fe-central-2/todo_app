import { useEffect, useState } from "react"
import { NewTodo } from "./NewTodo"

export const NewTodosList = (props) => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos(props.newTodos)
  },[props.newTodos])


  return (
    <>
      {
        todos.map((todo, i) => (
          <NewTodo key={i} todo={todo}/>
        ))
      }
    </>
  )
}
