import { useEffect, useState } from 'react';
import { NewTodosList } from '../components/NewTodosList';
import { getAllTodosByStatus } from '../utils/fetch_api_funcs';
import { useSelector } from 'react-redux';

export const NewTodosPage = () => {
  // const [newTodos, setNewTodos] = useState([])
  const todos = useSelector((state)=>state.todos.todos.filter(todo => todo.status === 'new'))
  // useEffect(() => {
  //   getAllTodosByStatus(setNewTodos, 'new')
  // },[])

  return (
    <div>
      <h2>New Todos Page</h2>
      {/* <NewTodosList newTodos={newTodos} setNewTodos={setNewTodos} /> */}
      <NewTodosList newTodos={todos} />
    </div>
  )
}
