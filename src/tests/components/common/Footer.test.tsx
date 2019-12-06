import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../components/common/Footer';

describe('Footer Component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Footer />);

        expect(container).toMatchInlineSnapshot();
    });
});