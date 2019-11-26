import React from 'react';
import ReactDOM from 'react-dom';
import TournamentPage from '../../components/pages/TournamentPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TournamentPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
