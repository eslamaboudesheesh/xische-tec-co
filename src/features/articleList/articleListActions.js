// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from './articleListSlice';
import { API_KEY, MOST_POPULAR } from '../../apis/configs/apiConfig';

export const fetchArticleList =
  ({ articleId }) =>
  async dispatch => {
    try {
      dispatch(fetchDataStart());

      const response = await axios.get(`${MOST_POPULAR}/${articleId}.json?api-key=${API_KEY}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      dispatch(fetchDataSuccess(response.data));
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
      dispatch(fetchDataFailure(errorMessage));
      throw error;
    }
  };
