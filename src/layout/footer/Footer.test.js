import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';
import '@testing-library/jest-dom/extend-expect';

describe('Footer Component', () => {
  it('renders Footer component with copyright text', () => {
    render(<Footer />);

    const footerText = screen.getByText('© 2024 The New York Times Company');
    expect(footerText).toBeInTheDocument();
  });
});
