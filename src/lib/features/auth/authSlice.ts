import { apiServices } from '@/services/requestHandler';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AsyncThunk } from '@reduxjs/toolkit';
import { AuthState } from './authTypes';

const initialState: AuthState = {
  apple: null,
  email: null,
  error: null,
  fb: null,
  google: null,
  userRole: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userRole = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readAllBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readAllBooks.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(readAllBooks.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const readAllBooks: AsyncThunk<any, object, object> = createAsyncThunk(
  'read/all/books',
  async (args: any, thunkAPI) => {
    try {
      const response = await apiServices.readUserProfile();
      return response.data;
    } catch (err) {
      return false;
    }
  }
);

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
