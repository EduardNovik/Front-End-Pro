import { createSlice } from "@reduxjs/toolkit";

const initialState :any = {
    data: [],
}

const filteredTodoSlice =  createSlice({
    name: 'filteredTodos',
    initialState,
    reducers: {
        updateFilteredTodo: (state, action) => {
            state.data = action.payload
        },
    }
})

export const { updateFilteredTodo } = filteredTodoSlice.actions 

export default filteredTodoSlice.reducer
