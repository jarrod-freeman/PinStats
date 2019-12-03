import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundPage from '../../../components/pages/NotFoundPage';

describe('NotFoundPage Component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NotFoundPage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});