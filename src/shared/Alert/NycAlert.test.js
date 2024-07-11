import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NycAlert from './index';
import '@testing-library/jest-dom/extend-expect'; // for better assertions

describe('NycAlert Component', () => {
  it('renders NycAlert component with message and type', () => {
    render(<NycAlert type="error" message="Test error message" />);

    const alertElement = screen.getByText('Test error message');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass('MuiAlert-message');
  });

  it('closes the alert when the close button is clicked', async () => {
    render(<NycAlert type="error" message="Test error message" />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText('Test error message')).not.toBeInTheDocument();
    });
  });
});
