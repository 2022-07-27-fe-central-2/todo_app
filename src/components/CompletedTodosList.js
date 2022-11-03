import { CompletedTodo } from "./CompletedTodo"

export const CompletedTodosList = () => {

  const todos = [
    {
      text: 'take out trash',
      notes: 'lots of trash today',
      status: 'complete'
    },
    {
      text: 'eat pineapples',
      notes: 'pineapples, pineapples, pineapples',
      status: 'complete'
    },
    {
      text: 'study programming',
      notes: 'aka coding',
      status: 'complete'
    }
  ]

  return (
    <>
      {
        todos.map((todo, i) => (
          <CompletedTodo key={i} todo={todo} />
        ))
      }
    </>
  )
}
