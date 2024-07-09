/* eslint-disable import/no-extraneous-dependencies */
// src/app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
// Import your slice reducers here
import articleListReducer from './features/articleList/articleListSlice';

const rootReducer = combineReducers({
  // Add your slice reducers here
  articleList: articleListReducer,
});

export default rootReducer;
