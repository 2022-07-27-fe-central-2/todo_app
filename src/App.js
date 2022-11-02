import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { CreateTodoPage } from './pages/CreateTodoPage';
import { NewTodosPage } from './pages/NewTodosPage';
import { InProgressTodosPage } from './pages/InProgressTodosPage';
import { CompletedTodosPage } from './pages/CompletedTodosPage';

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      {/* <CreateTodoPage /> */}
      {/* <NewTodosPage /> */}
      {/* <InProgressTodosPage /> */}
      {/* <CompletedTodosPage /> */}
    </div>
  );
}
