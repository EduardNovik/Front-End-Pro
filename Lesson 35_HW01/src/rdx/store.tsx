import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import filteredTodoReducer from './filteredTodoSlice'

export const store = configureStore <any> ({
    reducer: {
        createTodos: todoReducer,
        createFilteredTodos: filteredTodoReducer
    } 
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch