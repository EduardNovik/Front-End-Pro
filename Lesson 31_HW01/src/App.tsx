import { useState , useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'


function App() {

  const [todos, setTodos] = useState <any> ([])
  const [inputText, setInputText] = useState('')
  const [status, setStatus] = useState ('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo:any) => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo:any) => todo.completed !== true))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  
  useEffect(()=>{
    getLocalTodos()
  },[])

  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  },[todos, status])

 
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
      
    }else{
      let todosFromLocalStorage = JSON.parse(localStorage.getItem('todos') as any) 
      setTodos(todosFromLocalStorage)
    }
  }

 
  return (  
    <div className="App">
      <h1>Come on Man, that's what you need to do:</h1>
      <TodoForm todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  )
}

export default App
