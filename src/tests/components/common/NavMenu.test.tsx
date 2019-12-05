import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavMenu from '../../../components/common/NavMenu';

describe('NavMenu Component', () => {
    test('renders without crashing', () => {
        const component = render(<HashRouter><NavMenu /></HashRouter>);

        expect(component.container).toBeDefined();
    });
});