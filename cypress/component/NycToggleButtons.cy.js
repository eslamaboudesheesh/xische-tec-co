import React from 'react';
import { mount } from 'cypress/react';
import NycToggleButtons from '../../src/shared/toggleButton'; // Adjust the path if necessary

describe('NycToggleButtons Component', () => {
  const items = [
    { label: 'Today', value: 1 },
    { label: 'Last 7 Days', value: 7 },
    { label: 'Last 30 Days', value: 30 },
  ];

  it('should render the toggle buttons', () => {
    const onSelectionChange = cy.stub();

    mount(<NycToggleButtons onSelectionChange={onSelectionChange} items={items} />);

    items.forEach(item => {
      cy.get(`button[aria-label="${item.label.toLowerCase()}"]`).should('contain', item.label);
    });
  });

  it('should call onSelectionChange when a button is clicked', () => {
    const onSelectionChange = cy.stub();

    mount(<NycToggleButtons onSelectionChange={onSelectionChange} items={items} />);

    cy.get('button[aria-label="last 7 days"]').click();
    cy.wrap(onSelectionChange).should('have.been.calledWith', 7);

    cy.get('button[aria-label="last 30 days"]').click();
    cy.wrap(onSelectionChange).should('have.been.calledWith', 30);
  });

  it('should update the selected value when a button is clicked', () => {
    const onSelectionChange = cy.stub();

    mount(<NycToggleButtons onSelectionChange={onSelectionChange} items={items} />);

    cy.get('button[aria-label="last 7 days"]').click();
    cy.get('button[aria-label="last 7 days"]').should('have.attr', 'aria-pressed', 'true');

    cy.get('button[aria-label="last 30 days"]').click();
    cy.get('button[aria-label="last 30 days"]').should('have.attr', 'aria-pressed', 'true');
    cy.get('button[aria-label="last 7 days"]').should('have.attr', 'aria-pressed', 'false');
  });
});
