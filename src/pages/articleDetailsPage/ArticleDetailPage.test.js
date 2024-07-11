import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ArticleDetailPage from './index';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import defaultImageUrl from '../../assets/images/placeholder.png';

// Mock useLocation to control the returned state

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useLocation: jest.fn(),
  };
});

const mockArticle = {
  title: 'Test Article Title',
  abstract: 'This is a test abstract for the article.',
  byline: 'By Test Author',
  published_date: '2023-07-11T00:00:00Z',
  media: [
    {
      'media-metadata': [
        { url: 'http://testimage.com/image1.jpg', format: 'Standard Thumbnail', height: 75, width: 75 },
        { url: 'http://testimage.com/image2.jpg', format: 'Medium Thumbnail', height: 150, width: 150 },
        { url: 'http://testimage.com/image3.jpg', format: 'Large Thumbnail', height: 300, width: 300 },
      ],
    },
  ],
};

describe('ArticleDetailPage Component', () => {
  it('renders EmptySection when no data is available', () => {
    useLocation.mockReturnValue({ state: null });

    render(
      <Router>
        <ArticleDetailPage />
      </Router>,
    );

    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });

  it('renders article details correctly with data', () => {
    useLocation.mockReturnValue({ state: { data: mockArticle } });

    render(
      <Router>
        <ArticleDetailPage />
      </Router>,
    );

    expect(screen.getByText('Test Article Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test abstract for the article.')).toBeInTheDocument();
    expect(screen.getByText('By Test Author')).toBeInTheDocument();
    expect(screen.getByText(new Date('2023-07-11T00:00:00Z').toLocaleDateString())).toBeInTheDocument();
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', 'http://testimage.com/image3.jpg');
  });

  it('renders default image when media is empty', () => {
    const mockArticleWithoutMedia = { ...mockArticle, media: [] };
    useLocation.mockReturnValue({ state: { data: mockArticleWithoutMedia } });

    render(
      <Router>
        <ArticleDetailPage />
      </Router>,
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', defaultImageUrl);
  });
});
