import React from 'react';
import ReactDOM from 'react-dom';
import PlayerSearchPage from '../../components/pages/PlayerSearchPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlayerSearchPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
