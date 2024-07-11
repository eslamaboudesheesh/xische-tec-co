import React from 'react';
import { mount } from 'cypress/react';
import Icon from '../../src/shared/Icon'; // Adjust the path if necessary

describe('Icon Component', () => {
  it('should render the icon with default props', () => {
    mount(<Icon icon="la-home" />);

    cy.get('i')
      .should('have.class', 'las')
      .and('have.class', 'la-home')
      .and('have.class', 'radix-icon')
      .and('have.class', 'dark');
    cy.get('i').should('have.css', 'color', 'rgb(28, 29, 33)'); // Default color #1C1D21
    cy.get('i').should('have.css', 'font-size', '18px'); // Default size 18px
  });

  it('should render the icon with custom color and size', () => {
    mount(<Icon icon="la-user" color="#ff0000" size={24} />);

    cy.get('i')
      .should('have.class', 'las')
      .and('have.class', 'la-user')
      .and('have.class', 'radix-icon')
      .and('have.class', 'dark');
    cy.get('i').should('have.css', 'color', 'rgb(255, 0, 0)'); // Custom color #ff0000
    cy.get('i').should('have.css', 'font-size', '24px'); // Custom size 24px
  });

  it('should render the icon with a custom class', () => {
    mount(<Icon icon="la-cog" className="custom-class" />);

    cy.get('i')
      .should('have.class', 'las')
      .and('have.class', 'la-cog')
      .and('have.class', 'radix-icon')
      .and('have.class', 'custom-class');
  });
});
