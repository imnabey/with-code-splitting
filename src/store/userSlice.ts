import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store'
import { loginAPI, registerAPI } from 'src/services/api/userAPI'

const initialState = {
  isLoading: false,
  errorMessage: '',
  currentUser: null,
};

export const login = createAsyncThunk(
  'user/login',
  async (data: { email: string, password: string }) => {
    const response = await loginAPI(data)
    // console.log(response, "cekk");

    if (response.data.Token) {
      localStorage.setItem('token', response.data.Token);
    }

    return response.data
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (data: { email: string, password: string, name: string }) => {
    const response = await registerAPI(data)
    return response.data
  }
);

// Config slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    // Start login request
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    // Request login successful
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.isAuthenticated = true;
      state.currentUser = action.payload;
    });

    // Request login error
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      // state.errorMessage = action.payload.message;
    });

    // Start register request
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });

    // Request register successful
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.isAuthenticated = true;
      state.currentUser = action.payload;
    });

    // Request register error
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
      // state.errorMessage = action.payload.message;
    });
  },
});

// Export actions
export const { logout } = userSlice.actions;

// Select state currentUser from slice
export const selectUser = (state: RootState) => state.users.currentUser;
export const selectLoading = (state: RootState) => state.users.isLoading;
export const selectErrorMessage = (state: RootState) => state.users.errorMessage;

// Export reducer
export default userSlice.reducer;
