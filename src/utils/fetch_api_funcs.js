const mockapiURL = process.env.REACT_APP_MOCK_API_URL


export const getAllTodos = async () => {
  const res = await fetch(mockapiURL)
  if (res.status === 200) {
    const dataArray = await res.json()
    return dataArray
  }
  else {
    console.log(res.statusText)
    return []
  }
}

export const createNewTodo = async (todoBody) => {
  const res = await fetch(mockapiURL, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(todoBody)
  })
  if (res.status === 201) {
    const todos = await getAllTodos()
    return todos
  }
  else {
    console.log(res.statusText)
    return []
  }
}

export const updateTodo = async (todo) => {
  const res = await fetch(`${mockapiURL}/${todo.id}`, {
    headers: {'Content-Type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify(todo)
  })
  if (res.status === 200) {
    const todos = await getAllTodos()
    return todos
  }
  else {
    console.log(res.statusText)
    return []
  }
}

export const deleteTodo = async (todoId) => {
  const res = await fetch(`${mockapiURL}/${todoId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    const todos = await getAllTodos()
    return todos
  }
  else {
    console.log(res.statusText)
    return []
  }
}
