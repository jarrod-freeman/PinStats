import React from 'react';
import { render } from '@testing-library/react';
import TablePaginationActions from '../../../components/common/TablePaginationActions';

describe('TablePaginationActions Component', () => {
    test('renders without crashing', () => {
        const component = render(<TablePaginationActions />);

        expect(component.container).toBeDefined();
    });
});