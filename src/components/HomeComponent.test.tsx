import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './HomeComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
