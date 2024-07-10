import * as React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const NycToggleButtons = ({ onSelectionChange, items }) => {
  const [valueItem, setValueItem] = React.useState(items[0].value);
  const handleButtonSelection = (event, newSelection) => {
    if (newSelection !== null) {
      setValueItem(newSelection);
      onSelectionChange(newSelection);
    }
  };

  return (
    <ToggleButtonGroup value={valueItem} exclusive onChange={handleButtonSelection} aria-label="text valueItem">
      {items.map(period => (
        <ToggleButton key={period.value} value={period.value} aria-label={period.label.toLowerCase()}>
          {period.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

NycToggleButtons.propTypes = {
  onSelectionChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default NycToggleButtons;
