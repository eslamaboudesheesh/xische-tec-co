import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';

import { useLocation } from 'react-router-dom';
import { EmptySection } from '../../shared/EmptySection';
import defaultImageUrl from '../../assets/images/placeholder.png';

const ArticleDetailPage = () => {
  const { state } = useLocation();

  const { data } = state || {};

  if (!data) {
    return <EmptySection />;
  }
  const imageUrl = data.media.length > 0 ? data.media[0]['media-metadata'][2].url : defaultImageUrl;

  return (
    <Container
      sx={{
        mb: 2,
        mt: 4,
        minHeight: '100vh',
      }}
    >
      <Card>
        {imageUrl && <CardMedia component="img" height="400" image={imageUrl} alt={data.title} />}
        <CardContent>
          <Typography variant="h4">{data.title}</Typography>
          <Typography variant="body1">{data.abstract}</Typography>
          <Box mt={2}>
            <Typography variant="body2" color="text.secondary">
              {data.byline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(data.published_date).toLocaleDateString()}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ArticleDetailPage;
