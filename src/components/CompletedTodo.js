export const CompletedTodo = (props) => {

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
      <button onClick={() => props.onDeleteTodo(props.completedTodo.id)}>Completely delete Todo</button>
    </div>
  )
}
