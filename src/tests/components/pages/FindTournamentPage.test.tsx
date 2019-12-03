import React from 'react';
import ReactDOM from 'react-dom';
import FindTournamentPage from '../../../components/pages/FindTournamentPage';

describe('FindTournamentPage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FindTournamentPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});