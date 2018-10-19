import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

it('should render Header component', () => {
    expect(shallow(<Header/>)).toMatchSnapshot();
});