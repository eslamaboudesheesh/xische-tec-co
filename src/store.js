/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Additional middleware or enhancers can be added here
});

export default store;
