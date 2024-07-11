import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ArticleCard from '../../src/pages/components/articleCard';

// Mock data for the article
const mockArticle = {
  id: 1,
  title: 'Test Article Title',
  abstract: 'This is a test abstract for the article.',
  byline: 'By Test Author',
  published_date: '2023-07-11T00:00:00Z',
};

describe('ArticleCard Component', () => {
  it('should display the article details', () => {
    mount(
      <MemoryRouter initialEntries={['/']}>
        <ArticleCard article={mockArticle} />
      </MemoryRouter>,
    );

    cy.get('.article-title').should('contain', 'Test Article Title');
    cy.get('p').should('contain', 'This is a test abstract for the article.');
    cy.get('p').should('contain', 'By Test Author');
    cy.get('p').should('contain', new Date('2023-07-11T00:00:00Z').toLocaleDateString());
  });

  it('should navigate to the article details page on title click', () => {
    mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ArticleCard article={mockArticle} />} />
          <Route path="/articles/:id" element={<div>Article Details Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    cy.get('.article-title').click();
    cy.contains('Article Details Page').should('be.visible');
  });
});
