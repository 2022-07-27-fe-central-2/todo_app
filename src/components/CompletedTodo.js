export const CompletedTodo = (props) => {
  const { text, notes, status } = props.todo
  return (
    <div style={{ height: '20rem', width: '20rem', border: '1px solid red'}}>
      <p>
        status: {status}
      </p>
      <p>
        text: {text}
      </p>
      <p>
        notes: {notes}
      </p>
      <button>Completely delete Todo</button>
    </div>
  )
}
