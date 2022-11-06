import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { CreateTodoPage } from './pages/CreateTodoPage';
import { NewTodosPage } from './pages/NewTodosPage';
import { InProgressTodosPage } from './pages/InProgressTodosPage';
import { CompletedTodosPage } from './pages/CompletedTodosPage';
import { useState } from 'react';

export const App = () => {
  const [route, setRoute] = useState('home')

  const [todos, setTodos] = useState({
    newTodos: [],
    inProgressTodos: [],
    completedTodos: []
  })

  return (
    <div className="App">
      <NavBar setRoute={setRoute}/>
      {
        route === 'home' &&
        <HomePage />
      }
      {
        route === 'create' &&
        <CreateTodoPage todos={todos} setTodos={setTodos} />
      }
      {
        route === 'new' &&
        <NewTodosPage todos={todos} setTodos={setTodos} />
      }
      {
        route === 'inprogress' &&
        <InProgressTodosPage todos={todos} setTodos={setTodos} />
      }
      {
        route === 'completed' &&
        <CompletedTodosPage todos={todos} setTodos={setTodos} />
      }
    </div>
  );
}
