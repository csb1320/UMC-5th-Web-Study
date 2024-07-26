// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    pw: '',
    loading: false,
    error: null,
    userInfo: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setPw: (state, action) => {
      state.pw = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  setId,
  setPw,
  setLoading,
  setError,
  setUserInfo,
} = userSlice.actions;

export const selectUser = (state) => state.user;

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
