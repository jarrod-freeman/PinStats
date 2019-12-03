import React from 'react';
import ReactDOM from 'react-dom';
import PlayerSearchPage from '../../../components/pages/PlayerSearchPage';

describe('PlayerSearchPage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PlayerSearchPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});