import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../components/common/Footer';

describe('Footer Component', () => {
    test('renders without crashing', () => {
        const component = render(<Footer />);

        expect(component.container).toBeDefined();
    });
});