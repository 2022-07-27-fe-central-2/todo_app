
export const NavBar = (props) => {

  const { setRoute } = props

  return (
    <div style={{marginTop: '2rem'}}>
      <button onClick={() => setRoute('home')}>Home</button>
      <button onClick={() => setRoute('create')}>Create Todo</button>
      <button onClick={() => setRoute('new')}>New Todos</button>
      <button onClick={() => setRoute('inprogress')}>In Progress Todos</button>
      <button onClick={() => setRoute('completed')}>Completed Todos</button>
    </div>
  )
}
