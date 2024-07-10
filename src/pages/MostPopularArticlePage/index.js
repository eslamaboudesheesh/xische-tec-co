import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';

import NycAlert from '../../shared/Alert';
import NycLoading from '../../shared/loading';
import { EmptySection } from '../../shared/EmptySection';
import { fetchArticleList } from '../../features/articleList/articleListActions';
import NycToggleButtons from '../../shared/toggleButton';

import './style.scss';
import ArticleCard from '../components/articleCard';

const MostPopularArticlePage = () => {
  const [isInitialMount, setIsInitialMount] = useState(true); // Guard variable for initial mount

  const ArticlePeriods = [
    { label: 'Today', value: 1 },
    { label: 'Last 7 Days', value: 7 },
    { label: 'Last 30 Days', value: 30 },
  ];

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.articleList);

  const handlePeriodChange = newPeriod => {
    dispatch(fetchArticleList({ articleId: newPeriod }));
  };

  useEffect(() => {
    console.log('...isInitialMount');
    if (isInitialMount) {
      handlePeriodChange(ArticlePeriods[0].value);
      setIsInitialMount(false); // Set guard variable to false after first API call
    }
  }, [isInitialMount]);

  return (
    <div className="articleList-wrapper">
      {error && <NycAlert message={error} type="error" />}

      <div className="title-wrapper">
        <Box mb={2}>
          <h2>Most Popular Articles</h2>
        </Box>
        <Box mb={2}>
          <NycToggleButtons onSelectionChange={handlePeriodChange} items={ArticlePeriods} />
        </Box>
      </div>
      {loading ? (
        <NycLoading />
      ) : data && data.length > 0 ? (
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map(article => (
            <Grid item key={article.id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptySection />
      )}
    </div>
  );
};

export default MostPopularArticlePage;
