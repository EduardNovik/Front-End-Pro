import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const saveLocalTodosMiddleware = createAsyncThunk(
  "todos/saveLocalTodosMiddleware",
  (arg: any) => {
    localStorage.setItem("todos", JSON.stringify(arg));
  }
);
   

export const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    return localStorage.setItem("todos", JSON.stringify([]));
  } else {
      let ls = JSON.parse(localStorage.getItem("todos") as any)
    return JSON.parse(localStorage.getItem("todos") as any);
  }
};


export const deleteTodoItem = createAsyncThunk(
    'todos/deleteTodo',
    (id:number, { getState, dispatch})=>{
        const states:any = getState()
        const state = states.createTodos.data
        
        const newState = state.map((todo:any) => todo.id !== id ? todo :
        {id:todo.id, text:todo.text, completed:todo.completed, isDeleted:!todo.isDeleted})
        dispatch(updateTodo(newState))

         setTimeout(()=>{
            const deleteTask = state.filter((todo:any) => todo.id !== id)
             dispatch(updateTodo(deleteTask))
        },300)
    }
)


const initialState :any = {
    data: [],
}


const todoSlice =  createSlice({
    name: 'createTodos',
    initialState,
    reducers: {
        addTodo: (state , action) => {
            const newTodo = {
                id: Math.random()*1000,
                text: action.payload.text,
                completed: false,
                isDeleted: false
            }
            state.data.push(newTodo)
        },
        updateTodo: (state, action) => {
            state.data = action.payload
        },
        completeTodo: (state, action) => {
            const newCompleteState = state.data.map((todo: any) => todo.id !== action.payload ? todo : 
            {id:todo.id, text:todo.text, completed:!todo.completed, isDeleted:todo.isDeleted})
            state.data = newCompleteState
        }
    },
})
    

export const { addTodo, updateTodo, completeTodo} = todoSlice.actions 

export default todoSlice.reducer
