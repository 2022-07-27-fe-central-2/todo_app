import './App.css';
import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { CreateTodoPage } from './pages/CreateTodoPage';
import { NewTodosPage } from './pages/NewTodosPage';
import { InProgressTodosPage } from './pages/InProgressTodosPage';
import { CompletedTodosPage } from './pages/CompletedTodosPage';

export const App = () => {

  const [route, setRoute] = useState('home')

  return (
    <div className="App">
      <NavBar setRoute={setRoute}/>
      {
        route === 'home' &&
        <HomePage />
      }
      {
        route === 'create' &&
        <CreateTodoPage />
      }
      {
        route === 'new' &&
        <NewTodosPage />
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
