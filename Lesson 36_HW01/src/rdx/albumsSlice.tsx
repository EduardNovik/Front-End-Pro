import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
 

export interface fetchType {
  data: any
}

const initialState: fetchType = {
  data: [],
}

export const fetchAlbumsMiddleware = createAsyncThunk(
    'fetchAlbum/fetchAlbumsMiddleware',
    (url:any, {rejectWithValue}) => {
        return fetch (url).then(response => response.json()).catch(err => rejectWithValue(err.message))      
    }
)

export const fetchAlbumsData = createSlice({
  name: 'fetchAlbum',
  initialState,
  reducers: {
    updateStore: (state, action) => {
        state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumsMiddleware.fulfilled, (state, action) => {
        state.data = action.payload
    }).addCase(fetchAlbumsMiddleware.rejected, (state, { payload }) =>{
        console.log(payload);
    })
  }
})


export const {  updateStore } = fetchAlbumsData.actions

export default fetchAlbumsData.reducer