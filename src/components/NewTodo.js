export const NewTodo = ({text}) => {

  return (
    <div style={{ height: '10rem', width: '10rem', border: '1px solid red'}}>
      <p>
        {text}
      </p>
      <button>change to in-progress</button>
    </div>
  )
}
