import { createSlice } from '@reduxjs/toolkit';
import { getAuthUser, removeAuthUser } from '@/utils/localStorageUtil';
import { login } from './authThunk';

const initialState = {
  loading: 'Process',
  error: null,
  user: getAuthUser(),
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear(state) {
      state.loading = 'Process';
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = 'pending';
    },
    [login.success]: (state, { payload: user }) => {
      state.loading = 'success';
      state.error = null;
      state.user = user;
    },
    [login.rejected]: (state, { payload: error }) => {
      state.loading = 'rejected';
      state.error = error;
      state.user = null;
    },
  },
});

export const { putUser, clear } = slice.actions;
export default slice.reducer;

// Extra Actions

export const logout = () => async (dispatch) => {
  removeAuthUser();
  dispatch(clear());
};
