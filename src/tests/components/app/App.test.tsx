import React from 'react';
import { render } from '@testing-library/react';
import App from '../../../components/app/App';

describe('App Component', () => {
    test('renders without crashing', () => {
        const component = render(<App />);

        expect(component.container).toBeDefined();
    });
});