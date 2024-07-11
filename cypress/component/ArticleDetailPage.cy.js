import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ArticleDetailPage from '../../src/pages/articleDetailsPage';

// Mock data for the article
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
  it('should display the article details when data is present', () => {
    const state = { data: mockArticle };

    mount(
      <MemoryRouter initialEntries={[{ pathname: '/details', state }]}>
        <Routes>
          <Route path="/details" element={<ArticleDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    cy.get('h4').should('contain', 'Test Article Title');
    cy.get('p').should('contain', 'This is a test abstract for the article.');
    cy.get('img').should('have.attr', 'src', 'http://testimage.com/image3.jpg');
  });

  it('should display the EmptySection component when no data is present', () => {
    mount(
      <MemoryRouter initialEntries={[{ pathname: '/details', state: null }]}>
        <Routes>
          <Route path="/details" element={<ArticleDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    cy.get('div').contains('No data available').should('be.visible'); // Adjust this line if your EmptySection component displays something else
  });
});
