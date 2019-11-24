import React from 'react';
import ReactDOM from 'react-dom';
import ProfileComponent from '../../components/ifpa/ProfileComponent';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfileComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});
