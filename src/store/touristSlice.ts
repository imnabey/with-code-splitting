import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from 'src/store'
import { getTouristListAPI, getTouristByIdAPI, addTouristAPI, deleteTouristAPI, updateTouristAPI } from 'src/services/api/touristAPI'

interface TouristState {
  error: null,
  status: 'idle' | 'loading' | 'failed',
  tourists: string[],
  totalTourists: number,
  totalPage: number,
  touristById: {
    tourist_profilepicture: string,
    tourist_name: string,
    tourist_email: string,
    createdat: string,
    id: string,
    tourist_location: string
  }
}

const initialState: TouristState = {
  status: 'idle',
  error: null,
  tourists: [],
  totalTourists: 0,
  totalPage: 0,
  touristById: {
    tourist_profilepicture: '',
    tourist_name: '',
    tourist_email: "",
    createdat: "",
    id: "",
    tourist_location: ""
  },
}

export const getTouristList = createAsyncThunk(
  'tourist/getList',
  async (data: { page: number, token: string }) => {
    const response = await getTouristListAPI(data)
    return response
  },
)

const token = localStorage.getItem('token') || "";
console.log(token, "tokenn KK")

export const getTouristById = createAsyncThunk(
  'tourist/getTouristId',
  async (id: string) => {
    const response = await getTouristByIdAPI(id)
    return response
  },
)

export const addTouristList = createAsyncThunk(
  'tourist/addList',
  async (data: { tourist_name: string, tourist_location: string, tourist_email: string }) => {
    const response = await addTouristAPI(data)
    return response
  }
);

export const deleteTourist = createAsyncThunk(
  'tourist/deleteTourist',
  async (data: { tourist_name: string, tourist_location: string, tourist_email: string, id: string }) => {
    const response = await deleteTouristAPI(data)
    return response
  }
);

export const editTourist = createAsyncThunk(
  'tourist/editTourist',
  async (data: { tourist_name: string, tourist_location: string, tourist_email: string, id: string }) => {
    const response = await updateTouristAPI(data)
    return response
  }
);

export const touristSlice = createSlice({
  name: 'tourist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTouristById.fulfilled, (state, action) => {
        state.status = 'idle'
        state.touristById = action.payload
      })
      .addCase(deleteTourist.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(editTourist.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(addTouristList.fulfilled, (state) => {
        state.status = 'idle'
      })
      .addCase(getTouristList.pending, state => {
        state.status = 'loading'
      })
      .addCase(getTouristList.fulfilled, (state, action) => {
        state.status = 'idle'
        state.tourists = action.payload.data
        state.totalTourists = action.payload.totalrecord
        state.totalPage = action.payload.total_pages
      })
      .addCase(getTouristList.rejected, (state) => {
        state.status = 'failed'
      })

  },
})

export const touristList = (state: RootState) => state.tourists.tourists;
export const touristStatus = (state: RootState) => state.tourists.status;
export const totalTourists = (state: RootState) => state.tourists.totalTourists;
export const touristId = (state: RootState) => state.tourists.touristById;

export default touristSlice.reducer
