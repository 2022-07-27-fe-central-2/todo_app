export const CompletedTodo = (props) => {

  const onDeleteTodo = (e) => {
    e.preventDefault()
    const completedTodos = props.todos.completedTodos.filter((completedTodo) => completedTodo.id !== props.completedTodo.id)
    props.setTodos({
      ...props.todos,
      completedTodos
    })
  }

  return (
    <div style={{ height: '20rem', width: '20rem', border: '1px solid red'}}>
      <p>
        status: {props.completedTodo.status}
      </p>
      <p>
        text: {props.completedTodo.text}
      </p>
      <p>
        notes: {props.completedTodo.notes}
      </p>
      <button onClick={onDeleteTodo}>Completely delete Todo</button>
    </div>
  )
}
