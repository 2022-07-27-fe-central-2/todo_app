import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { CreateTodoPage } from './pages/CreateTodoPage';
import { NewTodosPage } from './pages/NewTodosPage';
import { InProgressTodosPage } from './pages/InProgressTodosPage';
import { CompletedTodosPage } from './pages/CompletedTodosPage';
import { useEffect, useState } from 'react';

export const App = () => {
  const [route, setRoute] = useState('home')

  const [newTodos, setNewTodos] = useState([])
  const [inProgressTodos, setInProgressTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <NavBar setRoute={setRoute}/>
      {
        route === 'home' &&
        <HomePage />
      }
      {
        route === 'create' &&
        <CreateTodoPage newTodos={newTodos} setNewTodos={setNewTodos}/>
      }
      {
        route === 'new' &&
        <NewTodosPage newTodos={newTodos}/>
      }
      {
        route === 'inprogress' &&
        <InProgressTodosPage />
      }
      {
        route === 'completed' &&
        <CompletedTodosPage />
      }
    </div>
  );
}
