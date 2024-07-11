// articleListSlice.test.js
import articleListReducer, { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './articleListSlice';

describe('articleList reducer', () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  it('should handle fetchDataStart', () => {
    const nextState = articleListReducer(initialState, fetchDataStart());
    expect(nextState).toEqual({ data: null, loading: true, error: null });
  });

  it('should handle fetchDataSuccess', () => {
    const data = { results: [{ id: 1, title: 'Article 1' }] };
    const nextState = articleListReducer(initialState, fetchDataSuccess(data));
    expect(nextState).toEqual({ data: data.results, loading: false, error: null });
  });

  it('should handle fetchDataFailure', () => {
    const error = 'Network Error';
    const nextState = articleListReducer(initialState, fetchDataFailure(error));
    expect(nextState).toEqual({ data: null, loading: false, error });
  });
});
