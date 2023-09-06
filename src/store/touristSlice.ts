import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from 'src/store'
import { getTouristListAPI } from 'src/services/api/touristAPI'

// export interface TouristState {
//   value: number
//   status: 'idle' | 'loading' | 'failed'
// }

// const initialState: TouristState = {
//   value: 0,
//   status: 'idle',
// }

const initialState = {
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
