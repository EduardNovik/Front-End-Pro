import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'
import albumsReducer from './albumsSlice'
import photosReducer from './photosSlice'

export const store = configureStore({
  reducer: {
    fetchData: usersReducer,
    fetchAlbumsData: albumsReducer,
    fetchPhotosData: photosReducer
  }
})

 
export type RootState = ReturnType<typeof store.getState>
 
export type AppDispatch = typeof store.dispatch