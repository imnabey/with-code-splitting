import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import touristReducer from 'src/store/touristSlice'
import userReducer from 'src/store/userSlice'


export const store = configureStore({
  reducer: {
    tourists: touristReducer,
    users: userReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
