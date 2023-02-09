import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
 

export interface fetchType {
  data: any
}

const initialState: fetchType = {
  data: [],
}

export const fetchUsersMiddleware = createAsyncThunk(
    'fetchUsers/fetchMiddleware',
    (url:string, {rejectWithValue}) => {
        return fetch (url).then(response => response.json()).catch(err => rejectWithValue(err.message))      
    }
)

export const fetchUsersData = createSlice({
  name: 'fetchUsers',
  initialState,
  reducers: {
    updateStore: (state, action) => {
        state.data = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersMiddleware.fulfilled, (state, action) => {
        state.data = action.payload
    }).addCase(fetchUsersMiddleware.rejected, (state, action ) =>{
        console.log(action.payload);
    })
  }
})


export const {  updateStore } = fetchUsersData.actions

export default fetchUsersData.reducer