import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TablePaginationActions from '../../../components/common/TablePaginationActions';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

describe('TablePaginationActions Component', () => {
    it('renders without crashing when default value props are provided', () => {
        const { container } = render(<TablePaginationActions count={0} page={0} rowsPerPage={0} onChangePage={() => {}} />);

        expect(container).toBeDefined();
    });

    it('changes pages correctly when the next page button is clicked', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={0} rowsPerPage={10} onChangePage={pageChanged} />);
        const nextButton = await component.findByLabelText('next page');

        expect(nextButton).toBeDefined();

        fireEvent.click(nextButton);

        expect(pageChanged).toBeCalled();
        expect(pageChanged).toBeCalledTimes(1);

        const firstParam = pageChanged.mock.calls[0][0];
        const secondParam = pageChanged.mock.calls[0][1];

        expect(typeof firstParam).toBe('object');
        expect(secondParam).toBe(1);
    });

    it('changes pages correctly when the previous page button is clicked', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={1} rowsPerPage={10} onChangePage={pageChanged} />);
        const prevButton = await component.findByLabelText('previous page');

        expect(prevButton).toBeDefined();

        fireEvent.click(prevButton);

        expect(pageChanged).toBeCalled();
        expect(pageChanged).toBeCalledTimes(1);

        const firstParam = pageChanged.mock.calls[0][0];
        const secondParam = pageChanged.mock.calls[0][1];

        expect(typeof firstParam).toBe('object');
        expect(secondParam).toBe(0);
    });

    it('changes pages correctly when the last page button is clicked', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={0} rowsPerPage={10} onChangePage={pageChanged} />);
        const lastPageButton = await component.findByLabelText('last page');

        expect(lastPageButton).toBeDefined();

        fireEvent.click(lastPageButton);

        expect(pageChanged).toBeCalled();
        expect(pageChanged).toBeCalledTimes(1);

        const firstParam = pageChanged.mock.calls[0][0];
        const secondParam = pageChanged.mock.calls[0][1];

        expect(typeof firstParam).toBe('object');
        expect(secondParam).toBe(9);
    });

    it('changes pages correctly when the first page button is clicked', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={9} rowsPerPage={10} onChangePage={pageChanged} />);
        const firstPageButton = await component.findByLabelText('first page');

        expect(firstPageButton).toBeDefined();

        fireEvent.click(firstPageButton);

        expect(pageChanged).toBeCalled();
        expect(pageChanged).toBeCalledTimes(1);

        const firstParam = pageChanged.mock.calls[0][0];
        const secondParam = pageChanged.mock.calls[0][1];

        expect(typeof firstParam).toBe('object');
        expect(secondParam).toBe(0);
    });

    it('enables next page and last page buttons when there are pages beyond the current page', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={0} rowsPerPage={10} onChangePage={pageChanged} />);
        const nextButton = await component.findByLabelText('next page');
        const lastPageButton = await component.findByLabelText('last page');

        expect(nextButton.getAttribute('disabled')).toBeNull();
        expect(lastPageButton.getAttribute('disabled')).toBeNull();
    });

    it('enables prev page and first page buttons when there are pages before the current page', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={9} rowsPerPage={10} onChangePage={pageChanged} />);
        const prevButton = await component.findByLabelText('previous page');
        const firstPageButton = await component.findByLabelText('first page');

        expect(prevButton.getAttribute('disabled')).toBeNull();
        expect(firstPageButton.getAttribute('disabled')).toBeNull();
    });

    it('enables all page buttons when there are pages before/after the current page', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={4} rowsPerPage={10} onChangePage={pageChanged} />);
        const firstPageButton = await component.findByLabelText('first page');
        const prevButton = await component.findByLabelText('previous page');
        const nextButton = await component.findByLabelText('next page');
        const lastPageButton = await component.findByLabelText('last page');

        expect(prevButton.getAttribute('disabled')).toBeNull();
        expect(firstPageButton.getAttribute('disabled')).toBeNull();
        expect(nextButton.getAttribute('disabled')).toBeNull();
        expect(lastPageButton.getAttribute('disabled')).toBeNull();
    });

    it('disables next page and last page buttons when there are no pages after the current page', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={9} rowsPerPage={10} onChangePage={pageChanged} />);
        const nextButton = await component.findByLabelText('next page');
        const lastPageButton = await component.findByLabelText('last page');

        expect(nextButton.getAttribute('disabled')).toBe('');
        expect(lastPageButton.getAttribute('disabled')).toBe('');
    });

    it('disables prev page and first page buttons when there are no pages before the current page', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={100} page={0} rowsPerPage={10} onChangePage={pageChanged} />);
        const prevButton = await component.findByLabelText('previous page');
        const firstPageButton = await component.findByLabelText('first page');

        expect(prevButton.getAttribute('disabled')).toBe('');
        expect(firstPageButton.getAttribute('disabled')).toBe('');
    });

    it('disables all page buttons when there are no items to page', async () => {
        const pageChanged = jest.fn();
        const component = render(<TablePaginationActions count={0} page={0} rowsPerPage={10} onChangePage={pageChanged} />);
        const firstPageButton = await component.findByLabelText('first page');
        const prevButton = await component.findByLabelText('previous page');
        const nextButton = await component.findByLabelText('next page');
        const lastPageButton = await component.findByLabelText('last page');

        expect(prevButton.getAttribute('disabled')).toBe('');
        expect(firstPageButton.getAttribute('disabled')).toBe('');
        expect(nextButton.getAttribute('disabled')).toBe('');
        expect(lastPageButton.getAttribute('disabled')).toBe('');
    });

    it('orders page buttons ltr by default', async () => {
        const pageChanged = jest.fn();
        const { container } = render(<TablePaginationActions count={0} page={0} rowsPerPage={10} onChangePage={pageChanged} />);

        const buttons = container.querySelectorAll('button');

        expect(buttons.length).toBe(4);
        expect(buttons[0].getAttribute('aria-label')).toBe('first page');
        expect(buttons[1].getAttribute('aria-label')).toBe('previous page');
        expect(buttons[2].getAttribute('aria-label')).toBe('next page');
        expect(buttons[3].getAttribute('aria-label')).toBe('last page');
    });

    it('orders page buttons rtl when the theme direction is rtl', async () => {
        const pageChanged = jest.fn();
        const theme = createMuiTheme();
        theme.direction = 'rtl';

        const { container } = render(<ThemeProvider theme={theme}><TablePaginationActions count={0} page={0} rowsPerPage={10} onChangePage={pageChanged} /></ThemeProvider>);

        const buttons = container.querySelectorAll('button');

        expect(buttons.length).toBe(4);
        expect(buttons[3].getAttribute('aria-label')).toBe('last page');
        expect(buttons[2].getAttribute('aria-label')).toBe('next page');
        expect(buttons[1].getAttribute('aria-label')).toBe('previous page');
        expect(buttons[0].getAttribute('aria-label')).toBe('first page');
    });
});