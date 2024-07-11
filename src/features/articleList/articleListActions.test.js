/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
// articleListActions.test.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';

import { fetchArticleList } from './articleListActions';
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from './articleListSlice';
import { API_KEY, MOST_POPULAR } from '../../apis/configs/apiConfig';

const { thunk } = require('redux-thunk');

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('fetchArticleList actions', () => {
  let store;
  let mock;

  beforeEach(() => {
    store = mockStore({
      articleList: {
        data: null,
        loading: false,
        error: null,
      },
    });
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.resetHandlers();
    mock.restore();
  });

  it('dispatches fetchDataSuccess on successful API call', async () => {
    const articleId = 1;
    const data = { results: [{ id: 1, title: 'Article 1' }] };

    mock.onGet(`${MOST_POPULAR}/${articleId}.json?api-key=${API_KEY}`).reply(200, data);

    await store.dispatch(fetchArticleList({ articleId }));

    const actions = store.getActions();
    expect(actions[0]).toEqual(fetchDataStart());
    expect(actions[1]).toEqual(fetchDataSuccess(data));
  });
  it('dispatches fetchDataFailure on failed API call', async () => {
    const articleId = 1;
    const error = 'Request failed with status code 500';

    mock.onGet(`${MOST_POPULAR}/${articleId}.json?api-key=${API_KEY}`).reply(500);

    try {
      await store.dispatch(fetchArticleList({ articleId }));
    } catch (err) {
      const actions = store.getActions();
      expect(actions[0]).toEqual(fetchDataStart());
      expect(actions[1]).toEqual(fetchDataFailure(error));
    }
  });
});
