import React from 'react';
import ReactDOM from 'react-dom';
import TournamentListComponent from './TournamentListComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TournamentListComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
