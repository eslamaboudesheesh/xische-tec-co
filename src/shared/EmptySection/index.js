import React from 'react';
import './style.scss';
import Icon from '../Icon';

export const EmptySection = () => (
  <div className="data-empty">
    <p>
      <Icon className="radix-icon-empty" icon="la-exclamation-circle" color="white" size="25" />
      No data available
    </p>
  </div>
);
