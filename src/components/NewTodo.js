export const NewTodo = (props) => {
  const { text, status } = props.todo
  return (
    <div style={{ height: '20rem', width: '20rem', border: '1px solid red'}}>
      <p>
        status: {status}
      </p>
      <p>
        text: {text}
      </p>
      <button>change to in-progress</button>
    </div>
  )
}
