import React from 'react';
import { mount } from 'cypress/react';
import Footer from '../../src/layout/footer';

describe('Footer Component', () => {
  it('should display the footer text', () => {
    mount(<Footer />);

    cy.get('footer').within(() => {
      cy.contains('© 2024 The New York Times Company').should('be.visible');
    });
  });
});
