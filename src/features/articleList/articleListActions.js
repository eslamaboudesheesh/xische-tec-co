import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from './articleListSlice';
import { API_KEY, MOST_POPULAR } from '../../apis/configs/apiConfig';

export const fetchArticleList =
  ({ articleId }) =>
  async dispatch => {
    try {
      dispatch(fetchDataStart());

      const response = await fetch(`${MOST_POPULAR}/${articleId}.json?api-key=${API_KEY}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
