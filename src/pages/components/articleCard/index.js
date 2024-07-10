import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import defaultImageUrl from '../../../assets/images/placeholder.png';
import Icon from '../../../shared/Icon';

const ArticleCard = ({ article }) => {
  // eslint-disable-next-line camelcase
  const { title, abstract, byline, published_date, url, media } = article;

  const imageUrl = media.length > 0 ? media[0]['media-metadata'][2].url : defaultImageUrl;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345, mb: 2, height: '100%' }}>
      {imageUrl && <CardMedia component="img" height="140" image={imageUrl} alt={title} />}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#333' }}
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
      <CardActions sx={{ mt: 'auto' }}>
        <Button size="small" color="primary" href={url} target="_blank">
          Read More
        </Button>
      </CardActions>
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