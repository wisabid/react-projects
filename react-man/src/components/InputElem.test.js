import React from 'react';
import { shallow } from 'enzyme';
import InputElem from './InputElem';

describe('<inputElem />', () => {
    it('<InputElem /> should render correctly', () => {
        const component = shallow(<InputElem />);
        expect(component).toMatchSnapshot();
    })

})