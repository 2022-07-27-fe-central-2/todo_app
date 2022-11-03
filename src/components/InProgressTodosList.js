import { InProgressTodo } from "./InProgressTodo"

export const InProgressTodosList = () => {

  const todos = [
    {
      text: 'take out trash',
      notes: 'lots of trash today',
      status: 'in-progress'
    },
    {
      text: 'eat pineapples',
      notes: 'pineapples, pineapples, pineapples',
      status: 'in-progress'
    },
    {
      text: 'study programming',
      notes: 'aka coding',
      status: 'in-progress'
    }
  ]

  return (
    <>
      {
        todos.map((todo, i) => (
          <InProgressTodo key={i} todo={todo}/>
          ))
      }
    </>
  )
}
