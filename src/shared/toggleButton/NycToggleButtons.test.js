import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NycToggleButtons from './index';
import '@testing-library/jest-dom/extend-expect'; // for better assertions

const items = [
  { label: 'Today', value: 1 },
  { label: 'Last 7 Days', value: 7 },
  { label: 'Last 30 Days', value: 30 },
];

describe('NycToggleButtons Component', () => {
  it('renders NycToggleButtons component with all items', () => {
    render(<NycToggleButtons onSelectionChange={() => {}} items={items} />);

    items.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('calls onSelectionChange with the correct value when a toggle button is clicked', () => {
    const onSelectionChange = jest.fn();
    render(<NycToggleButtons onSelectionChange={onSelectionChange} items={items} />);

    const toggleButton = screen.getByText('Last 7 Days');
    fireEvent.click(toggleButton);

    expect(onSelectionChange).toHaveBeenCalledWith(7);
  });

  it('sets the correct initial selected value', () => {
    render(<NycToggleButtons onSelectionChange={() => {}} items={items} />);

    const initialSelectedButton = screen.getByLabelText('today');
    expect(initialSelectedButton).toHaveClass('Mui-selected');
  });

  it('changes selection correctly when a new button is clicked', () => {
    render(<NycToggleButtons onSelectionChange={() => {}} items={items} />);

    const initialSelectedButton = screen.getByLabelText('today');
    expect(initialSelectedButton).toHaveClass('Mui-selected');

    const newSelectedButton = screen.getByLabelText('last 7 days');
    fireEvent.click(newSelectedButton);

    expect(initialSelectedButton).not.toHaveClass('Mui-selected');
    expect(newSelectedButton).toHaveClass('Mui-selected');
  });
});
