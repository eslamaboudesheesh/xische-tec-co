import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import logo from '../../assets/images/logo.svg';

describe('Header Component', () => {
  it('renders Header component with logo', () => {
    render(<Header />);

    const imgElement = screen.getByAltText('NYC logo');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', logo);
  });
});
