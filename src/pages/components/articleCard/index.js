import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../shared/Icon';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line camelcase
  const { title, abstract, byline, published_date } = article;

  const handleArticleClick = data => {
    navigate(`/articles/${data.id}`, { state: { data } });
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345, mb: 2, height: '100%' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#333', cursor: 'pointer' }}
          onClick={() => handleArticleClick(article)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && handleArticleClick(article)}
          className="article-title"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem', color: '#666' }}>
          {abstract}
        </Typography>
        <Box mt={2}>
          {byline && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', mt: 2 }}
            >
              <Icon icon="la-pen" />
              <Box component="span" ml={1}>
                {byline}
              </Box>
            </Typography>
          )}

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', mt: 2 }}
          >
            <Icon icon="la-calendar" />
            <Box component="span" ml={1}>
              {new Date(published_date).toLocaleDateString()}
            </Box>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    published_date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        'media-metadata': PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string.isRequired,
            format: PropTypes.string.isRequired,
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
          }),
        ),
      }),
    ).isRequired,
  }).isRequired,
};

export default ArticleCard;
