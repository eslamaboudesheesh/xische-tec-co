import React from 'react';
import { mount } from 'cypress/react';
import Header from '../../src/layout/header';

describe('Header Component', () => {
  it('should display the NYC logo', () => {
    mount(<Header />);

    cy.get('header').within(() => {
      cy.get('img').should('have.attr', 'alt', 'NYC logo');
    });
  });
});
