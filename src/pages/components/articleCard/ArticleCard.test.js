/* eslint-disable global-require */
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleCard from './index';
import '@testing-library/jest-dom/extend-expect'; // for better assertions

const mockArticle = {
  id: 11111,
  title: 'Test Article Title',
  abstract: 'This is a test abstract for the article.',
  byline: 'By Test Author',
  published_date: '2023-07-11T00:00:00Z',
  url: 'http://testurl.com',
  media: [
    {
      'media-metadata': [
        {
          url: 'http://testimage.com/image1.jpg',
          format: 'Standard Thumbnail',
          height: 75,
          width: 75,
        },
      ],
    },
  ],
};

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ArticleCard Component', () => {
  it('renders ArticleCard component', async () => {
    await act(async () => {
      render(
        <Router>
          <ArticleCard article={mockArticle} />
        </Router>,
      );
    });

    expect(screen.getByText('Test Article Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test abstract for the article.')).toBeInTheDocument();
    expect(screen.getByText('By Test Author')).toBeInTheDocument();
    expect(screen.getByText(new Date('2023-07-11T00:00:00Z').toLocaleDateString())).toBeInTheDocument();
  });
  it('calls navigate on title click', () => {
    render(
      <Router>
        <ArticleCard article={mockArticle} />
      </Router>,
    );

    const titleElement = screen.getByText('Test Article Title');
    fireEvent.click(titleElement);

    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/articles/${mockArticle.id}`, { state: { data: mockArticle } });
  });

  it('calls navigate on Enter key press', () => {
    render(
      <Router>
        <ArticleCard article={mockArticle} />
      </Router>,
    );

    const titleElement = screen.getByText('Test Article Title');
    fireEvent.keyDown(titleElement, { key: 'Enter', code: 'Enter' });

    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/articles/${mockArticle.id}`, { state: { data: mockArticle } });
  });
});
