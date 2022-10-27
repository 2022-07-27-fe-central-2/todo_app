export const InProgressTodo = ({text, notes}) => {
  return (
    <div style={{ height: '10rem', width: '10rem', border: '1px solid red'}}>
      <p>
        {text}
      </p>
      <p>
        {notes}
      </p>
      <button>change to complete</button>
    </div>
  )
}
