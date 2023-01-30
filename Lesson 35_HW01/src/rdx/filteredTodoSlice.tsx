import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState :any = {
    data: [],
}

export const filterTodo = createAsyncThunk (
    'filteredTodos/deleteTodo',
    (status:string, {getState, dispatch}:any)=>{
        const states:any = getState()
        const state = states.createTodos.data
        dispatch(updateFilteredTodo(state))

        switch (status) {
            case "completed":
                const newStateFilteredComp = state.filter((todo: any) => todo.completed === true)
                dispatch(updateFilteredTodo(newStateFilteredComp))
                           
            break;
            case "uncompleted":
                const newStateFilteredUncomp = state.filter((todo: any) => todo.completed !== true)
                dispatch(updateFilteredTodo(newStateFilteredUncomp))
                
            default:
            break;
        }
    }
)

const filteredTodoSlice =  createSlice({
    name: 'filteredTodos',
    initialState,
    reducers: {
        updateFilteredTodo: (state, action) => {
            state.data = action.payload
        }
    }
})


export const {updateFilteredTodo} = filteredTodoSlice.actions 

export default filteredTodoSlice.reducer
