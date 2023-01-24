import './App.css'
import { useState , useEffect } from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

import { updateTodo } from './rdx/todoSlice'
import { updateFilteredTodo } from './rdx/filteredTodoSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
 


function App() {
  
  const [status, setStatus] = useState("all");
  const todosRedux = useSelector((state: any) => state.createTodos.data);
  const dispatch = useDispatch();

  const filterHandler = () => {
    switch (status) {
      case "completed":
        dispatch(updateFilteredTodo(todosRedux.filter((todo: any) => todo.completed === true)));
        break;
      case "uncompleted":
        dispatch(updateFilteredTodo(todosRedux.filter((todo: any) => todo.completed !== true)));
        break;
      default:
        dispatch(updateFilteredTodo(todosRedux));
        break;
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todosRedux, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todosRedux));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosFromLocalStorage = JSON.parse(
        localStorage.getItem("todos") as any
      );
      dispatch(updateTodo(todosFromLocalStorage));
    }
  };

  return (
    <div className="App">
      <h1>Come on Man, that's what you need to do:</h1>
      <TodoForm setStatus={setStatus} />
      <TodoList />
    </div>
  );
}

export default App;
