const mockapiURL = process.env.REACT_APP_MOCK_API_URL

// setTodos: setter to set the component state with an array of todos
// status: is string 'newTodo' || 'in-progress' || 'completed'
export const getAllTodosByStatus = async (setTodos, status) => {
  const res = await fetch(mockapiURL)
  const dataArray = await res.json()
  console.log(dataArray)
  const filteredArray = dataArray.filter((todo) => todo.status === status)
  setTodos(filteredArray)
}

export const createNewTodo = async (todoBody) => {
  const res = await fetch(mockapiURL, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(todoBody)
  })
  if (res.status === 201) {
    // todo: call getAllTodosByStatus again, so that the data is updated accordingly
  }
  else {
    // handle error
    console.log(res.statusText)
  }
}

export const deleteTodo = async (todoId) => {
  const res = await fetch(`${mockapiURL}/${todoId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    return
  }
  else {
    console.log(res.statusText)
    return null;
  }
}

// TODO:
// PUT crud operation
// 1. every time we change the status of the todo, we need to do the put crud
// changing just the status
// 2. when we update the notes on a in-progress todo
// changing the notes: (value)

export const updateTodo = async (todo) => {
  const res = await fetch(`${mockapiURL}/${todo.id}`, {
    headers: {'Content-Type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify(todo)
  })
  if (res.status === 200) {
    // DO Something good
  }
  else {
    // bad
    console.log(res.statusText)
  }
}
