import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../../../components/common/Header';

describe('Header Component', () => {
    test('renders without crashing', () => {
        const component = render(<HashRouter><Header /></HashRouter>);

        expect(component.container).toBeDefined();
    });
});