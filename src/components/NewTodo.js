export const NewTodo = (props) => {

  const onChangeToInProgress = (e) => {
    e.preventDefault()
    const changingTodo = {...props.newTodo, status: 'in-progress'}
    const newTodos = props.todos.newTodos.filter((newTodo) => newTodo.id !== changingTodo.id)
    props.setTodos({
      ...props.todos,
      newTodos,
      inProgressTodos: [...props.todos.inProgressTodos, changingTodo]
    })
  }

  return (
    <div style={{ height: '20rem', width: '20rem', border: '1px solid red'}}>
      <p>
        status: {props.newTodo.status}
      </p>
      <p>
        text: {props.newTodo.text}
      </p>
      <button onClick={onChangeToInProgress}>change to in-progress</button>
    </div>
  )
}
