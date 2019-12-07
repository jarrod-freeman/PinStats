import React from 'react';
import { render } from '@testing-library/react';
import TablePaginationActions from '../../../components/common/TablePaginationActions';

describe('TablePaginationActions Component', () => {
    it('renders without crashing when default value props are provided', () => {
        const component = render(<TablePaginationActions count={0} page={0} rowsPerPage={0} onChangePage={() => {}} />);

        expect(component.container).toBeDefined();
    });
});