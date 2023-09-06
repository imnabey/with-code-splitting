import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import touristReducer from 'src/store/touristSlice'

export const store = configureStore({
  reducer: {
    tourists: touristReducer,
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
