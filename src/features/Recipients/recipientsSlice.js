import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recipientService from './recipientsService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register user
export const registerReciever = createAsyncThunk(
    'recipient/create',
    async (user, thunkAPI) => {
      try {
        return await recipientService.registerReciever(user)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  ) 

  //find reciver
export const findReciever = createAsyncThunk(
    'recipient/read',
    async (user, thunkAPI) => {
      try {
        return await recipientService.findReciever(user)
      } catch (error) {
        const message =
          (error.response && 
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const recipientSlice = createSlice({
    name: 'recipient',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    }, 
    extraReducers: (builder) => {
      builder
        .addCase(registerReciever.pending, (state) => {
          state.isLoading = true
        })
        .addCase(registerReciever.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addCase(registerReciever.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
        .addCase(findReciever.pending, (state) => {
          state.isLoading = true
        })
        .addCase(findReciever.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addCase(findReciever.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
        
    },
  })
  
  export const { reset } = recipientSlice.actions
  export default recipientSlice.reducer