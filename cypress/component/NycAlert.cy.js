import React from 'react';
import { mount } from 'cypress/react';
import NycAlert from '../../src/shared/Alert';

describe('NycAlert Component', () => {
  it('should render the alert with the correct message and type', () => {
    mount(<NycAlert type="error" message="Test error message" />);

    cy.get('.MuiAlert-message').should('contain', 'Test error message');
    cy.get('.MuiAlert-root').should('have.class', 'MuiAlert-standardError');
  });

  it('should close the alert when the close button is clicked', () => {
    mount(<NycAlert type="info" message="Test info message" />);

    cy.get('.MuiAlert-message').should('contain', 'Test info message');
    cy.get('button[aria-label="Close"]').click();
    cy.get('.MuiAlert-message').should('not.exist');
  });

  it('should auto-hide the alert after the specified duration', () => {
    mount(<NycAlert type="warning" message="Test warning message" />);

    cy.get('.MuiAlert-message').should('contain', 'Test warning message');
    cy.wait(6000); // Wait for auto-hide duration
    cy.get('.MuiAlert-message').should('not.exist');
  });
});
