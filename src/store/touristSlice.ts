import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store'
import { getTouristListAPI } from 'src/services/api/touristAPI'

export interface TouristState {
  error: null,
  status: 'idle' | 'loading' | 'failed',
  tourists: [],
}

const initialState: TouristState = {
  status: 'idle',
  error: null,
  tourists: [],
}

export const getTouristList = createAsyncThunk(
  'tourist/getList',
  async () => {
    const response = await getTouristListAPI(1, 2)
    return response.data
  },
)

export const touristSlice = createSlice({
  name: 'tourist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTouristList.pending, state => {
        state.status = 'loading'
      })
      .addCase(getTouristList.fulfilled, (state, action) => {
        state.status = 'idle'
        state.tourists = action.payload
      })
      .addCase(getTouristList.rejected, (state) => {
        state.status = 'failed'
        // state.error = action.error.message
      })
  },
})

export const touristList = (state: RootState) => state.tourists.tourists;
export const touristStatus = (state: RootState) => state.tourists.status;

export default touristSlice.reducer
