import React from 'react';
import ReactDOM from 'react-dom';
import VersusPage from '../../../components/pages/VersusPage';

describe('HomePage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<VersusPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});