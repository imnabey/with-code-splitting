import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store'
import { loginAPI, registerAPI, logout, getUserAPI, tokenData } from 'src/services/api/userAPI'

const initialState = {
  isLoading: false,
  errorMessage: '',
  isAuthenticated: false,
  tokenInit: "",
  currentUser: {
    name: "",
    email: "",
    avatar: "",
    Token: ""
  },
};

export const login = createAsyncThunk(
  'user/login',
  async (data: { email: string, password: string }) => {
    const response = await loginAPI(data)

    if (response.data.Token) {
      localStorage.setItem('token', response.data.Token);
      localStorage.setItem('id', response.data.Id);
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

export const logouts = createAsyncThunk("user/logout", () => {
  logout();
});


export const tokens = createAsyncThunk("user/token", () => {
  tokenData();
});

export const getUser = createAsyncThunk(
  'user/getUser',
  async (id: string) => {
    const response = await getUserAPI(id)
    return response
  },
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(logouts.fulfilled, (state) => {
        state.isLoading = false;
        state.currentUser = {
          name: "",
          email: "",
          avatar: "",
          Token: ""
        };
      })
      .addCase(tokens.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.currentUser = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectUser = (state: RootState) => state.users.currentUser;
export const selectLoading = (state: RootState) => state.users.isLoading;
export const selectErrorMessage = (state: RootState) => state.users.errorMessage;
export const selecToken = (state: RootState) => state.users.tokenInit;
export const isAuthenticated = (state: RootState) => state.users.isAuthenticated;

export default userSlice.reducer;
