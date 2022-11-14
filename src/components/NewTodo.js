export const NewTodo = (props) => {

  return (
    <div style={{ height: '20rem', width: '20rem', border: '1px solid red'}}>
      <p>
        status: {props.newTodo.status}
      </p>
      <p>
        text: {props.newTodo.text}
      </p>
      <button onClick={() => props.onChangeToInProgress(props.newTodo)}>change to in-progress</button>
    </div>
  )
}
