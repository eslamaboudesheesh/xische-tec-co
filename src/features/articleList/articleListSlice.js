/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const articleListSlice = createSlice({
  name: 'articleList',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload.results || action.payload; // Adjust this line
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = articleListSlice.actions;

export default articleListSlice.reducer;
