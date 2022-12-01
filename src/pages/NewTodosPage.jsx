import { NewTodosList } from '../components/NewTodosList';
import { useSelector } from 'react-redux';

export const NewTodosPage = () => {

  const newTodos = useSelector((state) => state.todos.todos.filter(todo => todo.status === 'new'))

  return (
    <div>
      <h2>New Todos Page</h2>
      <NewTodosList newTodos={newTodos}/>
    </div>
  )
}
