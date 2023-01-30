import { configureStore } from '@reduxjs/toolkit'
import todoReducer, { getLocalTodos } from './todoSlice'
import filteredTodoReducer from './filteredTodoSlice'

export const store = configureStore <any> ({
    reducer: {
        createTodos: todoReducer,
        createFilteredTodos: filteredTodoReducer
    },
    preloadedState: {
        createTodos:{
            data: getLocalTodos()
        }
    } 
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch