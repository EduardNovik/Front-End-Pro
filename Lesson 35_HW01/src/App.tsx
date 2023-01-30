import './App.css'
import { useState , useEffect } from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

import { saveLocalTodosMiddleware } from './rdx/todoSlice'
import { filterTodo } from './rdx/filteredTodoSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch } from './rdx/store'
 


function App() {
  
  const [status, setStatus] = useState("all");
  const todosRedux = useSelector((state: any) => state.createTodos.data);
  const dispatch = useDispatch<AppDispatch>();

  const filterHandler = () => {
    dispatch(filterTodo(status))
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todosRedux, status]);

  const saveLocalTodos = () => {
    dispatch(saveLocalTodosMiddleware(todosRedux))
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
