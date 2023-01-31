import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
 

export interface fetchType {
  data: any
}

const initialState: fetchType = {
  data: [],
}

export const fetchPhotosMiddleware = createAsyncThunk(
    'fetchPhotos/fetchPhotosMiddleware',
    (url:any, {rejectWithValue}) => {
        return fetch (url).then(response => response.json()).catch(err => rejectWithValue(err.message))      
    }
)

export const fetchPhotosData = createSlice({
  name: 'fetchPhotos',
  initialState,
  reducers: {
    updateStore: (state, action) => {
        state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotosMiddleware.fulfilled, (state, action) => {
        state.data = action.payload
    }).addCase(fetchPhotosMiddleware.rejected, (state, { payload }) =>{
        console.log(payload);
    })
  }
})


export const {  updateStore } = fetchPhotosData.actions

export default fetchPhotosData.reducer