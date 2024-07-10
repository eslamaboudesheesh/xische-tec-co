import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NycAlert from '../../shared/Alert';
import NycLoading from '../../shared/loading';
import { EmptySection } from '../../shared/EmptySection';
import { fetchArticleList } from '../../features/articleList/articleListActions';
import ArticlePeriod from '../../utils/SettingIds';

const MostPopularArticlePage = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.articleList);
  useEffect(() => {
    console.log('Loading');
    dispatch(fetchArticleList({ articleId: ArticlePeriod.TODAY }));
    console.log(data);
  }, [dispatch]);
  return (
    <div className="articleList-wrapper">
      {error && <NycAlert message={error} type="error" />}
      {loading ? (
        <NycLoading />
      ) : (
        <>
          <p>Most Popular Articles </p>
          {data && data.length > 0 ? (
            data.map(article => (
              <div key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))
          ) : (
            <EmptySection />
          )}
        </>
      )}
    </div>
  );
};
export default MostPopularArticlePage;
