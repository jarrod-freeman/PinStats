import React from 'react';
import ReactDOM from 'react-dom';
import TournamentPage from '../../components/pages/TournamentPage';

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
        listen: jest.fn().mockImplementation(() => jest.fn())
    }),
}));

describe('TournamentPage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TournamentPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});