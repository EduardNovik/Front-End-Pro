import { createSlice } from "@reduxjs/toolkit";

const initialState :any = {
    data: [],
}

const todoSlice =  createSlice({
    name: 'todos',
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
    }
})

export const { addTodo, updateTodo } = todoSlice.actions 

export default todoSlice.reducer
