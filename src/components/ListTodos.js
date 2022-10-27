import { NewTodo } from "./NewTodo"

export const ListTodos = () => {

  const todos = [
    {
      text: 'take out trash',
      notes: '',
      status: 'new'
    },
    {
      text: 'eat pineapples',
      notes: '',
      status: 'new'
    },
    {
      text: 'study programming',
      notes: '',
      status: 'new'
    }
  ]

  return (
    <>
      {
        todos.map((todo) => (
          <NewTodo text={todo.text}/>
          ))
      }
    </>
  )
}