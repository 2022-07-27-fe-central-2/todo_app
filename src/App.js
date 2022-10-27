import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { CreateTodoPage } from './pages/CreateTodoPage';
import { ListTodoPage } from './pages/ListTodosPage';

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <HomePage /> */}
      {/* <CreateTodoPage /> */}
      <ListTodoPage />
    </div>
  );
}


// {/* <route ='/'>
//         < home page>
//       </route>
//       <route ='/create'>
//         < create page>
//       </route>
//       <route ='/list'>
//         < list page>
//       </route>
//       <route ='/in-progress'>
//         < in-progress page>
//       </route>
//       <route ='/completed'>
//         < completed page>
//       </route> */}