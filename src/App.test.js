import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { paths } from './routes/paths';

jest.mock('./pages/MostPopularArticlePage', () => () => <div>Most Popular Article Page</div>);
jest.mock('./pages/articleDetailsPage', () => () => <div>Article Detail Page</div>);

describe('App Component', () => {
  it('renders MostPopularArticlePage for the general path', () => {
    render(
      <MemoryRouter initialEntries={[paths.general]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('Most Popular Article Page')).toBeInTheDocument();
  });

  it('renders ArticleDetailPage for the details path', () => {
    render(
      <MemoryRouter initialEntries={[paths.details]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('Article Detail Page')).toBeInTheDocument();
  });

  it('redirects to the general path for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('Most Popular Article Page')).toBeInTheDocument();
  });
});
